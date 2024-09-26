import type { Context } from "#/app/api/(routes)/graphql/_types/context.type"
import type { ApolloServerOptions } from "@apollo/server"

export const resolvers: ApolloServerOptions<Context>["resolvers"] = {
  Query: {
    movies: async (_, __, { dataSources }) => {
      return await dataSources.moviesService.getMovies()
    },
  },
}
