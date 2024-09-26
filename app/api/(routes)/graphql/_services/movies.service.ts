import type { IMovies } from "#/app/api/_types/movies.interface"
import { CoreAPI } from "./core.service"

export class MoviesAPI extends CoreAPI {
  constructor(language: string) {
    super(language)
  }

  async getMovies(): Promise<IMovies> {
    return await this.get<IMovies>("discover/movie")
  }
}
