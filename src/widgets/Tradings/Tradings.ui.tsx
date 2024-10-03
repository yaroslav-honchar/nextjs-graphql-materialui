"use client"

import { useTranslations } from "next-intl"
import React from "react"
import { CardMovie } from "@/features/CardMovie"
import type { MoviePreviewType } from "@/shared/types"
import { Box, Container, Typography } from "@mui/material"

// const QUERY_TRADINGS = gql`
//   query {
//     tradings(timeWindow: "day") {
//       results {
//         id
//         poster_path
//         release_date
//         title
//         vote_average
//         vote_count
//       }
//     }
//   }
// `
//
// interface ITradingsResult {
//   tradings: EntitiesListPickType<MoviePreviewType, "results">
// }

const { data } = {
  data: {
    tradings: {
      results: [
        {
          id: 877817,
          title: "Самотні вовки",
          poster_path: "/hd2sl01UxDi0WxDFwU0eJ2rCxkj.jpg",
          release_date: "2024-09-20",
          vote_average: 6.5,
          vote_count: 173,
        },
        {
          id: 533535,
          title: "Дедпул і Росомаха",
          poster_path: "/oBHEUq33nH69l4VauXlJo12bPf0.jpg",
          release_date: "2024-07-24",
          vote_average: 7.7,
          vote_count: 3188,
        },
        {
          id: 1108566,
          title: "Killer Heat",
          poster_path: "/WiAEiqelck0NGWplhL5JQR12eg.jpg",
          release_date: "2024-09-25",
          vote_average: 6.2,
          vote_count: 62,
        },
        {
          id: 889737,
          title: "Джокер: Божевілля на двох",
          poster_path: "/7pA1VcVLqXdcHXLvpvuAsm6AhS0.jpg",
          release_date: "2024-10-01",
          vote_average: 6,
          vote_count: 9,
        },
        {
          id: 807339,
          title: "Apartment 7A",
          poster_path: "/oyjEPno8omeDYVNqUZS2RiEpuRC.jpg",
          release_date: "2024-09-20",
          vote_average: 5.976,
          vote_count: 42,
        },
        {
          id: 1184918,
          title: "Дикий робот",
          poster_path: "/iEOyPgSIz2NDpyxAwP7njEt8xlH.jpg",
          release_date: "2024-09-12",
          vote_average: 7.6,
          vote_count: 64,
        },
        {
          id: 1022789,
          title: "Думками навиворіт 2",
          poster_path: "/autXcUPWwlIROSOwzLSwe0NDTuK.jpg",
          release_date: "2024-06-11",
          vote_average: 7.644,
          vote_count: 3971,
        },
        {
          id: 519182,
          title: "Нікчемний Я 4",
          poster_path: "/mAx0fEjmO6oZxpEFpLWB0OQjfyM.jpg",
          release_date: "2024-06-20",
          vote_average: 7.16,
          vote_count: 1785,
        },
        {
          id: 933260,
          title: "Субстанція",
          poster_path: "/8JCWqu0qZ8jn6uZCSZd1Y7FfdOz.jpg",
          release_date: "2024-09-07",
          vote_average: 7.2,
          vote_count: 167,
        },
        {
          id: 1079091,
          title: "Покинь, якщо кохаєш",
          poster_path: "/laT8bJCeLQaD0RCV6EMWWlJNUz8.jpg",
          release_date: "2024-08-07",
          vote_average: 6.877,
          vote_count: 575,
        },
        {
          id: 858414,
          title: "Резбол: Баскетбол резервацій",
          poster_path: "/5MKpjuiCTk8nYnsUf5QegiPKEDh.jpg",
          release_date: "2024-09-08",
          vote_average: 6,
          vote_count: 11,
        },
        {
          id: 1299537,
          title: "Successor",
          poster_path: "/jqGZEk4sLGGmIXBDQzxTuT1lZx2.jpg",
          release_date: "2024-07-13",
          vote_average: 6.7,
          vote_count: 18,
        },
        {
          id: 592831,
          title: "Мегалополіс",
          poster_path: "/yZWHpr5HlKTDlPf46UH8RSlEOu9.jpg",
          release_date: "2024-09-25",
          vote_average: 5.246,
          vote_count: 63,
        },
        {
          id: 698687,
          title: "Трансформери: Початок",
          poster_path: "/nc3g4Xua9viwn94lrojfnxGl3Oq.jpg",
          release_date: "2024-09-11",
          vote_average: 7.221,
          vote_count: 86,
        },
        {
          id: 1019404,
          title: "The Wasp",
          poster_path: "/cLsQbDGHGaR8R6pBZac8V9Ui130.jpg",
          release_date: "2024-08-29",
          vote_average: 5.8,
          vote_count: 5,
        },
        {
          id: 840705,
          title: "Кліпни двічі",
          poster_path: "/fpqgRzYJ8bnvvcia2Ql9JN8oJUb.jpg",
          release_date: "2024-08-21",
          vote_average: 6.661,
          vote_count: 465,
        },
        {
          id: 1215162,
          title: "Убий їх усіх 2",
          poster_path: "/hgA5hN3NjNNSTXYOmAI6KNKOzbp.jpg",
          release_date: "2024-09-24",
          vote_average: 6.9,
          vote_count: 40,
        },
        {
          id: 1248753,
          title: "Amber Alert",
          poster_path: "/vkrmJ2fStfnvsLfBw55nimnjcd5.jpg",
          release_date: "2024-09-27",
          vote_average: 5.818,
          vote_count: 11,
        },
        {
          id: 917496,
          title: "Бітлджюс Бітлджюс",
          poster_path: "/vsNtayw04A2iZQc2E90DX6dkYTX.jpg",
          release_date: "2024-09-04",
          vote_average: 7.2,
          vote_count: 743,
        },
        {
          id: 1062215,
          title: "Вона слухає",
          poster_path: "/gUREuXCnJLVHsvKXDH9fgIcfM6e.jpg",
          release_date: "2024-08-28",
          vote_average: 6.381,
          vote_count: 143,
        },
      ],
    },
  },
}

export const Tradings: React.FC = () => {
  const tTradings = useTranslations("Tradings")
  // const { data, error, loading } = useClientQuery<ITradingsResult>(QUERY_TRADINGS)
  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Error</div>
  // if (!data) return <div>No data</div>

  const movies = data.tradings.results

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
        {tTradings("title")}
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
        {movies.map((movie: MoviePreviewType) => (
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
      </Box>
    </Container>
  )
}
