import { gql } from "graphql-tag"

export const QUERY_TRADINGS = gql`
  query {
    tradings(timeWindow: "week") {
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
