import { useTranslations } from "next-intl"
import React from "react"
import { ListMovies } from "@/features/ListMovies/ListMovies.ui"
import { useServerQuery } from "@/shared/hooks/use-server-query"
import type { EntitiesListPickType, MoviePreviewType } from "@/shared/types"
import { QUERY_TRADINGS } from "./Tradings.query"

interface ITradingsResult {
  tradings: EntitiesListPickType<MoviePreviewType, "results">
}

export const Tradings: React.FC = async () => {
  const tTradings = useTranslations("Tradings")
  const { data } = await useServerQuery<ITradingsResult>({ query: QUERY_TRADINGS })

  const movies = data.tradings.results

  return (
    <ListMovies
      title={tTradings("title")}
      data={movies}
    />
  )
}
