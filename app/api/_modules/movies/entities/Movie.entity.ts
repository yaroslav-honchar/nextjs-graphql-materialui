import type { IMovie } from "./Movie.interface"

export class Movie {
  id: IMovie["id"]
  poster_path: IMovie["poster_path"]
  release_date: IMovie["release_date"]
  title: IMovie["title"]

  constructor({ id, poster_path, release_date, title }: IMovie) {
    this.id = id
    this.poster_path = poster_path
    this.release_date = release_date
    this.title = title
  }
}
