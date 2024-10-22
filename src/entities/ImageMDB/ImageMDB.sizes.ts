export const imageSizes = {
  backdrop: {
    aspectRatio: 16 / 9,
    sizes: {
      300: "w300",
      780: "w780",
      1280: "w1280",
      1920: "w1920",
    },
  },
  poster: {
    aspectRatio: 2 / 3,
    sizes: {
      92: "w92",
      154: "w154",
      185: "w185",
      342: "w342",
      500: "w500",
      780: "w780",
    },
  },
}

/**
 * Original sizes of images from The Movie Database API
 *
 * const imageSizes = {
 *   backdrop_sizes: ["w300", "w780", "w1280", "original"],
 *   logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
 *   poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
 *   profile_sizes: ["w45", "w185", "h632", "original"],
 *   still_sizes: ["w92", "w185", "w300", "original"],
 * }
 * */
