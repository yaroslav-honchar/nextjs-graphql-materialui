import { getMoviedbTokenConfig } from "#/app/api/_configs/get-moviedb-token.config"
import { type AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest"

export class CoreAPI extends RESTDataSource {
  override baseURL = "https://api.themoviedb.org/3/"
  token: string
  language: string

  constructor(language: string) {
    super()
    this.language = language
    this.token = getMoviedbTokenConfig()
  }

  willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers["Authorization"] = `Bearer ${this.token}`
    request.headers["Accept"] = "application/json"
    request.params.set("language", this.language)
  }
}
