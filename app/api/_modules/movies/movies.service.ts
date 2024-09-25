import type { AxiosRequestConfig } from "axios"
import { coreService } from "#/app/api/_modules/core/core.service"
import type { IMovies } from "./entities/Movies.interface"

export const discoverMovies = (configs: AxiosRequestConfig = {}) => {
  return coreService.get<IMovies>("/discover/movie", configs)
}
