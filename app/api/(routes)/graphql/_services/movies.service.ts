import type { IEntitiesList, IMovie } from "@/shared/types"
import { CoreAPI } from "./core.service"

export class MoviesAPI extends CoreAPI {
  constructor(language: string) {
    super(language)
  }

  async getMovies(): Promise<IEntitiesList<IMovie>> {
    return await this.get<IEntitiesList<IMovie>>("discover/movie")
  }

  async getTrending(timeWindow: string): Promise<IEntitiesList<IMovie>> {
    return await this.get<IEntitiesList<IMovie>>(`trending/movie/${timeWindow}`)
  }
}
