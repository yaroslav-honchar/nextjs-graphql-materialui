import axios from "axios"
import { getMoviedbTokenConfig } from "#/app/api/_configs/get-moviedb-token.config"

const token = getMoviedbTokenConfig()

export const coreService = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
})
