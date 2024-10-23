import { gql } from "graphql-tag"

export const QUERY_HERO = gql`
  query {
    tradings(timeWindow: "week") {
      results {
        id
        backdrop_path
        overview
        title
        poster_path
        release_date
        vote_average
        original_title
      }
    }
  }
`
