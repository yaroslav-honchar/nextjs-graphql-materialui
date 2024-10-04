import React from "react"
import { CardMovie, CardMovieSkeleton } from "@/features/CardMovie"
import type { MoviePreviewType } from "@/shared/types"
import { Box, Container, Typography } from "@mui/material"
import type { IListMoviesProps } from "./ListMovies.props"

export const ListMovies: React.FC<IListMoviesProps> = ({ data, title, isLoading }) => {
  return (
    <Container
      sx={{
        paddingBlock: 4,
      }}
      maxWidth={"xl"}
      component={"section"}
    >
      <Typography
        component={"h2"}
        variant={"h3"}
        sx={{ marginBottom: 4 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          paddingBlock: 1,
          scrollSnapType: "x proximity",
          scrollPaddingLeft: "2px",
          scrollPaddingRight: "2px",
          paddingInline: "2px",
          overflowY: "hidden",
          flexFlow: "row nowrap",
        }}
      >
        {isLoading || !data?.length ? (
          <>
            {new Array(7).fill(0).map((_, index) => (
              <Box
                key={index}
                sx={{
                  flex: "none",
                  maxWidth: "13%",
                  width: "100%",
                  minWidth: 160,
                  scrollSnapAlign: "start",
                }}
              >
                <CardMovieSkeleton />
              </Box>
            ))}
          </>
        ) : (
          <>
            {data.map((movie: MoviePreviewType) => (
              <Box
                key={movie.id}
                sx={{
                  flex: "none",
                  maxWidth: "13%",
                  width: "100%",
                  minWidth: 160,
                  scrollSnapAlign: "start",
                }}
              >
                <CardMovie movie={movie} />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Container>
  )
}
