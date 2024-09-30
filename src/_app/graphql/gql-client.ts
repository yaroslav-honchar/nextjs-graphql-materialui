import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

/**
 * Creating an Apollo Client instance for the client side end can be used for server side rendering.
 *
 * This module exports the `client` constant, which is an instance of Apollo Client configured
 * with an in-memory cache and an HTTP link pointing to the GraphQL endpoint.
 *
 * @example
 * ```tsx
 * const query = gql`
 *   query {
 *     hello
 *   }
 * `
 *
 * export const Client: React.FC = () => {
 *   const { data } = useSuspenseQuery(query, {
 *      client: client
 *   })
 *
 *   return (
 *     <>
 *       <h1>Client</h1>
 *       {data && JSON.stringify(data)}
 *     </>
 *   )
 * }
 * ```
 * */
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  }),
})
