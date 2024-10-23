"use client"

import { useTranslations } from "next-intl"
import React, { useState } from "react"
import { ImageMDB } from "@/entities/ImageMDB"
import { RouterLink } from "@/shared/components/RouterLink"
import { VoteAverage } from "@/shared/components/VoteAverage"
import { useFormatDate } from "@/shared/hooks/use-format-date"
import { generateSlug } from "@/shared/lib/slug.lib"
import { ClientRoutes } from "@/shared/routes"
import type { MovieCarouselType } from "@/shared/types/movie.type"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, Button, Chip, Container, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import "swiper/css"
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper/types"
import type { IMainHeroCarouselProps } from "./MainHeroCarousel.props"
import { styles } from "./MainHeroCarousel.styles"

const StyledSwiperSlide = styled(SwiperSlide)({})

export const MainHeroCarousel: React.FC<IMainHeroCarouselProps> = ({ movies }) => {
  const tCommon = useTranslations("Common")
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const { format } = useFormatDate()

  return (
    <>
      <Box
        component={Swiper}
        sx={styles.backdropCarousel}
        modules={[EffectFade, Thumbs]}
        effect={"fade"}
        onSwiper={setThumbsSwiper}
        allowTouchMove={false}
        loop={true}
      >
        {movies.map(({ backdrop_path }: MovieCarouselType) => (
          <StyledSwiperSlide key={backdrop_path}>
            <ImageMDB
              sx={styles.backdropImage}
              imagetype={"backdrop"}
              width={1920}
              path={backdrop_path}
              alt={"backdrop"}
            />
          </StyledSwiperSlide>
        ))}
      </Box>
      <Container
        maxWidth={"lg"}
        sx={styles.movieCarousel}
        component={Swiper}
        spaceBetween={90}
        modules={[Navigation, EffectFade, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        effect={"fade"}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {movies.map(
          ({
            id,
            poster_path,
            title,
            original_title,
            overview,
            vote_average,
            release_date,
          }: MovieCarouselType) => (
            <StyledSwiperSlide
              key={id}
              sx={styles.movieCarouselSlide}
            >
              <ImageMDB
                imagetype={"poster"}
                width={342}
                path={poster_path}
                sx={styles.moviePoster}
                alt={title}
              />
              <Box sx={styles.movieContentWrap}>
                <Typography
                  variant={"h2"}
                  sx={styles.movieTitle}
                  component={"h2"}
                  fontWeight={700}
                >
                  {title}
                </Typography>
                <Typography
                  variant={"subtitle1"}
                  component={"h3"}
                >
                  {original_title}
                </Typography>
                <Typography
                  variant={"caption"}
                  component={"h3"}
                >
                  {format(release_date)}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    paddingBlock: 2,
                  }}
                >
                  <VoteAverage value={vote_average} />
                  <Chip
                    label="Outlined"
                    variant="outlined"
                  />
                  <Chip
                    label="Outlined"
                    variant="outlined"
                  />
                </Box>

                <Typography
                  variant={"subtitle2"}
                  component={"h4"}
                  clamp={3}
                >
                  {overview}
                </Typography>

                <RouterLink
                  href={ClientRoutes.movie(generateSlug(title, id))}
                  variant={"contained"}
                  color={"primary"}
                  sx={{
                    width: "fit-content",
                    minWidth: 180,
                    mt: 2,
                  }}
                >
                  {tCommon("details")}
                </RouterLink>
              </Box>
            </StyledSwiperSlide>
          ),
        )}
        <Button
          sx={{
            ...styles.carouselNavBtn,
            left: 0,
          }}
          className={"swiper-button-prev"}
        >
          <ChevronLeft sx={styles.carouselNavIcon} />
        </Button>
        <Button
          sx={{
            ...styles.carouselNavBtn,
            right: 0,
          }}
          className={"swiper-button-next"}
        >
          <ChevronRight sx={styles.carouselNavIcon} />
        </Button>
      </Container>
    </>
  )
}
