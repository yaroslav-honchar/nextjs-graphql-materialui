import { useLocale } from "next-intl"
import { useEffect } from "react"
import { useQuery } from "@apollo/client"
import type { DocumentNode, OperationVariables, TypedDocumentNode } from "@apollo/client/core"
import type { NoInfer, QueryHookOptions, QueryResult } from "@apollo/client/react/types/types"

/**
 * Custom hook to execute a GraphQL query with Apollo Client and handle locale-specific headers.
 *
 * This hook wraps the `useQuery` hook from Apollo Client, adding the `accept-language` header
 * based on the current locale from `next-intl`.
 *
 * @function useClientQuery
 * @template TData - The type of the query result data.
 * @template TVariables - The type of the query variables.
 * @param {DocumentNode | TypedDocumentNode<TData, TVariables>} query - The GraphQL query document.
 * @param {QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>} [options] - Optional query options.
 * @returns {QueryResult<TData, TVariables>} The result of the query execution.
 *
 * @example
 * ```tsx
 * const MY_QUERY = gql`
 *   query MyQuery {
 *     field
 *   }
 * `
 *
 * const MyComponent: React.FC = () => {
 *   const { data } = useClientQuery(MY_QUERY)
 *
 *   return <div>{data?.field}</div>
 * }
 */
export const useClientQuery = <
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>,
): QueryResult<TData, TVariables> => {
  const locale = useLocale()

  const result = useQuery<TData, TVariables>(query, {
    ...options,
    context: {
      ...options?.context,
      headers: {
        ...options?.context?.headers,
        "accept-language": locale,
      },
    },
  })

  useEffect(() => {
    if (result.refetch) {
      result.refetch()
    }
  }, [locale])

  return result
}
