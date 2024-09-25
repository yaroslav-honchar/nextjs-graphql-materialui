export const getMoviedbTokenConfig = (varName: string = "THE_MOVIEDB_TOKEN"): string => {
  const token = process.env[varName]
  if (!token) {
    throw new Error(`Missing environment variable: ${varName}`)
  }

  return token
}
