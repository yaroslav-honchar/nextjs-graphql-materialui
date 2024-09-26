import type { IMovies } from "#/app/api/_types/movies.interface"
import type { AugmentedRequest } from "@apollo/datasource-rest"
import { CoreAPI } from "./core.service"

export class MoviesAPI extends CoreAPI {
  constructor() {
    super()
  }

  willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers["Authorization"] = `Bearer ${this.token}`
    request.headers["Accept"] = "application/json"
  }

  async getMovies(): Promise<IMovies> {
    return await this.get<IMovies>("discover/movie")
  }
}
