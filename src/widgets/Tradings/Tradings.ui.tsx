"use client"

import { gql } from "graphql-tag"
import React from "react"
import { CardMovie } from "@/features/CardMovie"
import { useClientQuery } from "@/shared/hooks/use-client-query"
import type { EntitiesListPickType, MoviePreviewType } from "@/shared/types"
import { Container } from "@mui/material"
import Grid from "@mui/material/Grid2"

const QUERY_TRADINGS = gql`
  query {
    tradings(timeWindow: "day") {
      results {
        id
        poster_path
        release_date
        title
        vote_average
        vote_count
      }
    }
  }
`

interface ITradingsResult {
  tradings: EntitiesListPickType<MoviePreviewType, "results">
}

export const Tradings: React.FC = () => {
  const { data, error, loading } = useClientQuery<ITradingsResult>(QUERY_TRADINGS)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data) return <div>No data</div>

  const movies = data.tradings.results

  return (
    <Container>
      <Grid
        container
        spacing={2}
      >
        {movies.map((movie: MoviePreviewType) => (
          <Grid
            key={movie.id}
            size={2}
          >
            <CardMovie movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}