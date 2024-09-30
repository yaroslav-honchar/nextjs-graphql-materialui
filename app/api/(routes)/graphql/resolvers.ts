import type { ApolloServerOptions } from "@apollo/server"
import type { Context } from "#/app/api/(routes)/graphql/_types/context.type"

export const resolvers: ApolloServerOptions<Context>["resolvers"] = {
  Query: {
    movies: async (_, __, { dataSources }) => {
      return await dataSources.moviesService.getMovies()
    },
    tradings: async (_, { timeWindow }, { dataSources }) => {
      return await dataSources.moviesService.getTrending(timeWindow)
    },
  },
}
