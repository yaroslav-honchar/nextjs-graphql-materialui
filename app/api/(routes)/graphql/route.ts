import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import type { Context } from "#/app/api/(routes)/graphql/_types/context.type"
import { MoviesAPI } from "./_services/movies.service"
import type { NextRequest } from "next/server"
import { resolvers } from "./resolvers"
import { typeDefs } from "./schema"

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const language = req.headers.get("accept-language") || "en-US"

    return {
      req,
      dataSources: {
        moviesService: new MoviesAPI(language),
      },
    }
  },
})

export { handler as GET, handler as POST }
