import type { MoviesAPI } from "#/app/api/(routes)/graphql/_services"
import type { NextRequest } from "next/server"

export type Context = {
  req: NextRequest
  dataSources: {
    moviesService: MoviesAPI
  }
}
