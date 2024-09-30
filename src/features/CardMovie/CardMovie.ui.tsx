"use client"

import { format } from "date-fns"
import React from "react"
import { Image } from "@/shared/components/Image"
import { Box, Card, CardContent, Typography } from "@mui/material"
import type { ICardMovieProps } from "./CardMovie.props"

export const CardMovie: React.FC<ICardMovieProps> = ({ movie }) => {
  const { poster_path, title, release_date } = movie

  return (
    <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1.4",
        }}
      >
        <Image
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          height={330}
          width={220}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={title}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="caption"
          component="p"
        >
          {format(new Date(release_date), "EEEEEE MM.dd.yyyy")}
        </Typography>
      </CardContent>
    </Card>
  )
}
