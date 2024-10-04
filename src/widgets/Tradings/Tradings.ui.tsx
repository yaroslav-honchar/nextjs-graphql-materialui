"use client"

import { useTranslations } from "next-intl"
import React from "react"
import { ListMovies } from "@/features/ListMovies/ListMovies.ui"
import { useClientQuery } from "@/shared/hooks/use-client-query"
import type { EntitiesListPickType, MoviePreviewType } from "@/shared/types"
import { QUERY_TRADINGS } from "./Tradings.query"

interface ITradingsResult {
  tradings: EntitiesListPickType<MoviePreviewType, "results">
}

export const Tradings: React.FC = () => {
  const tTradings = useTranslations("Tradings")
  const { data, loading } = useClientQuery<ITradingsResult>(QUERY_TRADINGS)

  const movies = data?.tradings.results

  return (
    <ListMovies
      title={tTradings("title")}
      data={movies}
      isLoading={loading}
    />
  )
}
