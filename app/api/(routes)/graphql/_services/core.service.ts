import { getMoviedbTokenConfig } from "#/app/api/_configs/get-moviedb-token.config"
import { RESTDataSource } from "@apollo/datasource-rest"

export class CoreAPI extends RESTDataSource {
  override baseURL = "https://api.themoviedb.org/3/"
  token: string

  constructor() {
    super()
    this.token = getMoviedbTokenConfig()
  }
}
