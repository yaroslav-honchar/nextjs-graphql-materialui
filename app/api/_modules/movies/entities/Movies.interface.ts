import type { IMovie } from "./Movie.interface"

export interface IMovies {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}
