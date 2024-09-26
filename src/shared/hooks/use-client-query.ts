import { useLocale } from "next-intl"
import { useSuspenseQuery } from "@apollo/client"
import type { DocumentNode, OperationVariables, TypedDocumentNode } from "@apollo/client/core"
import type { UseSuspenseQueryResult } from "@apollo/client/react/hooks/useSuspenseQuery"
import type { NoInfer, SuspenseQueryHookOptions } from "@apollo/client/react/types/types"

/**
 * Custom hook to execute a GraphQL query with Apollo Client and handle locale-specific headers.
 *
 * This hook wraps the `useSuspenseQuery` hook from Apollo Client, adding the `accept-language` header
 * based on the current locale from `next-intl`.
 *
 * @function useClientQuery
 * @template TData - The type of the query result data.
 * @template TVariables - The type of the query variables.
 * @param {DocumentNode | TypedDocumentNode<TData, TVariables>} query - The GraphQL query document.
 * @param {SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>} [options] - Optional query options.
 * @returns {UseSuspenseQueryResult<TData, TVariables>} The result of the query execution.
 *
 * @example
 * ```tsx
 * const MY_QUERY = gql`
 *   query {
 *     ...
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
  options?: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>,
): UseSuspenseQueryResult<TData, TVariables> => {
  const locale = useLocale()

  return useSuspenseQuery<TData, TVariables>(query, {
    ...options,
    context: {
      headers: {
        "accept-language": locale,
      },
      ...(options?.context?.headers ?? {}),
    },
  })
}
