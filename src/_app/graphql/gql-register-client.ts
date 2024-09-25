import { registerApolloClient } from "@apollo/experimental-nextjs-app-support"
import { client } from "./gql-client"

/**
 * Registers the Apollo Client instance for server-side rendering.
 *
 * This module exports the `getClient` function, which provides access to the registered Apollo Client.
 * The client is configured using the `registerApolloClient` function from the `@apollo/experimental-nextjs-app-support` package.
 *
 * @module gql-register-client
 *
 * @example
 * ```tsx
 * const query = gql`
 *   query {
 *     hello
 *   }
 * `
 *
 * export const Server: React.FC = async () => {
 *   const { data } = await getClient().query({ query })
 *
 *   return (
 *     <>
 *       <h1>Server</h1>
 *       {data && JSON.stringify(data)}
 *     </>
 *   )
 * }
 * ```
 */
export const { getClient } = registerApolloClient(() => client)
