export const ClientRoutes = {
  home: "/",

  product: (slug: string) => {
    return `/product/${slug}`
  },
}
