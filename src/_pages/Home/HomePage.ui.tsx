import { gql } from "graphql-tag"
import { getClient } from "@/_app/graphql/gql-register-client"
import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"
import type { IHomePageProps } from "./HomePage.props"

const query = gql`
  {
    movies {
      total_pages
      total_results
      page
      results {
        title
        release_date
        poster_path
        id
      }
    }
  }
`

export async function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const { data } = await getClient().query({ query })

  return (
    <ul>
      {data.movies.results.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <Image
            width={150}
            height={225}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </li>
      ))}
    </ul>
  )
}
