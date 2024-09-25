import { gql } from "graphql-tag"

export const typeDefs = gql`
  type Query {
    hello: String
    movies: Movies
  }

  type Movie {
    id: Int
    poster_path: String
    release_date: String
    title: String
  }

  type Movies {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }
`
