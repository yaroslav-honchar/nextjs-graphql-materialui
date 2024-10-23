import React from "react"
import { useServerQuery } from "@/shared/hooks/use-server-query"
import type { EntitiesListPickType, MovieCarouselType } from "@/shared/types"
import { QUERY_HERO } from "@/widgets/MainHero/MainHero.query"
import { Box } from "@mui/material"
import { MainHeroCarousel } from "./components/MainHeroCarousel"

type HeroResultType = {
  tradings: EntitiesListPickType<MovieCarouselType, "results">
}

export const MainHero: React.FC = async () => {
  const { data } = await useServerQuery<HeroResultType>({
    query: QUERY_HERO,
  })

  const movies = data?.tradings.results || []

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        minHeight: "fit-content",
        paddingBlock: {
          xs: 4,
          md: 12,
          lg: 18,
        },
      }}
    >
      <MainHeroCarousel movies={movies} />
    </Box>
  )
}
