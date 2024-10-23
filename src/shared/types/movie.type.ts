interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  media_type?: string
}

type MoviePickType<PickKeys extends keyof IMovie> = Pick<IMovie, PickKeys>

type MoviePreviewType = MoviePickType<
  "id" | "title" | "poster_path" | "release_date" | "vote_average" | "vote_count"
>

type MovieCarouselType = MoviePickType<
  | "backdrop_path"
  | "id"
  | "original_title"
  | "overview"
  | "poster_path"
  | "release_date"
  | "title"
  | "vote_average"
>

export type { IMovie, MoviePickType, MoviePreviewType, MovieCarouselType }
