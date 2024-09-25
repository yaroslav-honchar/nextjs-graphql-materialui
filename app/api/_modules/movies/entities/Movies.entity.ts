import { Movie } from "./Movie.entity"
import type { IMovies } from "./Movies.interface"

export class Movies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number

  constructor({ page, results, total_pages, total_results }: IMovies) {
    this.page = page
    this.results = results.map((movie) => new Movie(movie))
    this.total_pages = total_pages
    this.total_results = total_results
  }
}
