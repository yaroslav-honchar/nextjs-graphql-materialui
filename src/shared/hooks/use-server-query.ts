import { useLocale } from "next-intl"
import { getClient } from "@/_app/graphql/gql-register-client"
import type { ApolloQueryResult, OperationVariables } from "@apollo/client/core/types"
import type { QueryOptions } from "@apollo/client/core/watchQueryOptions"

/**
 * Executes a GraphQL query on the server side with Apollo Client and handles locale-specific headers.
 *
 * This hook wraps the Apollo Client's `query` method, adding the `accept-language` header
 * based on the current locale from `next-intl`.
 *
 * @function useServerQuery
 * @template T - The type of the query result data.
 * @template TVariables - The type of the query variables.
 * @param {QueryOptions<TVariables, T>} options - The options for the GraphQL query.
 * @returns {Promise<ApolloQueryResult<T>>} The result of the query execution.
 *
 * @example
 * ```tsx
 * const MY_QUERY = gql`
 *   query {
 *     ...
 *   }
 * `
 *
 * const MyComponent: React.FC = async () => {
 *   const { data } = await useServerQuery({
 *     query: MY_QUERY,
 *   })
 *
 *   return <div>{data?.field}</div>
 * }
 */
export const useServerQuery = async <
  T = unknown,
  TVariables extends OperationVariables = OperationVariables,
>(
  options: QueryOptions<TVariables, T>,
): Promise<ApolloQueryResult<T>> => {
  const locale = useLocale()

  return await getClient().query<T, TVariables>({
    ...options,
    context: {
      headers: {
        "accept-language": locale,
      },
      ...(options.context?.headers ?? {}),
    },
  })
}
