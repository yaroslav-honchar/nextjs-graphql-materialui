import { moviesModule } from "#/app/api/_modules/movies/movies.module"

export const resolvers = {
  Query: {
    hello: () => "Hello world! ",
    movies: async () => await moviesModule(),
  },
}
