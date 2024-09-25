import { Movies } from "#/app/api/_modules/movies/entities/Movies.entity"
import { discoverMovies } from "./movies.service"

export const moviesModule = async () => {
  const movies = await discoverMovies()

  return new Movies(movies.data)
}
