import type { MoviePreviewType } from "@/shared/types"

export interface IListMoviesProps {
  title: string
  data: MoviePreviewType[] | null | undefined
  isLoading: boolean
}
