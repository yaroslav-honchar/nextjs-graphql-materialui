import { gql } from "graphql-tag"

export const typeDefs = gql`
  type Query {
    movies: Movies
    tradings(timeWindow: String!): Movies
  }

  type Movie {
    adult: Boolean
    backdrop_path: String
    genre_ids: [Int]
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Movies {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }
`
