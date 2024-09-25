import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yaroslav Honchar",
    short_name: "Yaroslav Honchar",
    description: "Yaroslav Honchar",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
  }
}
