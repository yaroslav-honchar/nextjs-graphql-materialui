export const ClientRoutes = {
  home: "/",
  movie: (slug: string): string => `/movie/${slug}`,
}
