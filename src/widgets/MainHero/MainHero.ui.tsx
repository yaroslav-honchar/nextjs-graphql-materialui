"use client"

import React from "react"
import { ImageMDB } from "@/entities/ImageMDB"
import { RouterLink } from "@/shared/components/RouterLink"
import { generateSlug } from "@/shared/lib/slug.lib"
import { ClientRoutes } from "@/shared/routes"
import type { IMovie, MoviePickType } from "@/shared/types/movie.type"
import { styles } from "@/widgets/MainHero/MainHero.styles"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, Button, Container, Typography } from "@mui/material"
import "swiper/css"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
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
        <Swiper
          speed={1500}
          modules={[Navigation, Pagination]}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {movies.map(({ id, poster_path, title, overview }: HeroMovieType) => (
            <SwiperSlide key={id}>
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

                  <RouterLink
                    href={ClientRoutes.movie(generateSlug(title, id))}
                    variant={"contained"}
                    color={"primary"}
                    sx={{
                      width: "fit-content",
                    }}
                  >
                    Details
                  </RouterLink>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
          <Button
            sx={{
              ...styles.carouselButton,
              left: 0,
            }}
            className={"swiper-button-prev"}
          >
            <ChevronLeft />
          </Button>
          <Button
            sx={{
              ...styles.carouselButton,
              right: 0,
            }}
            className={"swiper-button-next"}
          >
            <ChevronRight />
          </Button>
        </Swiper>
      </Container>
    </Box>
  )
}
