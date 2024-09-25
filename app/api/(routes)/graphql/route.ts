import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import type { NextRequest } from "next/server"
import { resolvers } from "./resolvers"
import { typeDefs } from "./schema"

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    return {
      req,
    }
  },
})

export { handler as GET, handler as POST }