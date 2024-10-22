"use client"

import React from "react"
import { ImageMDB } from "@/entities/ImageMDB"
import type { IMovie, MoviePickType } from "@/shared/types/movie.type"
import { styles } from "@/widgets/MainHero/MainHero.styles"
import { Box, Container, Typography } from "@mui/material"
import data from "./data.json"

type HeroMovieType = MoviePickType<"backdrop_path" | "overview" | "poster_path" | "title" | "id">

const movies: HeroMovieType[] = (data as IMovie[]).reduce(
  (acc: HeroMovieType[], holder: IMovie): HeroMovieType[] => {
    const movie: HeroMovieType = {
      id: holder.id,
      backdrop_path: holder.backdrop_path,
      overview: holder.overview,
      title: holder.title,
      poster_path: holder.poster_path,
    }
    return [...acc, movie]
  },
  [],
)

export const MainHero: React.FC = () => {
  const { id, poster_path, title, overview } = movies[0]

  return (
    <Box
      component={"section"}
      sx={styles.root}
    >
      <Box sx={styles.backdropWrap}>
        <ImageMDB
          sx={styles.backdropImage}
          imagetype={"backdrop"}
          width={1920}
          path={movies[0].backdrop_path}
          alt={"backdrop"}
        />
      </Box>
      <Container maxWidth={"lg"}>
        <Box
          key={id}
          sx={styles.movieInfoWrap}
        >
          <ImageMDB
            imagetype={"poster"}
            width={342}
            path={poster_path}
            sx={styles.movieInfoPoster}
            alt={title}
          />
          <Box sx={styles.movieInfoDescription}>
            <Typography
              variant={"h2"}
              component={"h2"}
            >
              {title}
            </Typography>
            <Typography
              variant={"subtitle2"}
              component={"h4"}
            >
              {overview}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
