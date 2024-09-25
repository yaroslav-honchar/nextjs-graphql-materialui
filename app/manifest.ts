import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextJS + GraphQL + TypeScript",
    short_name: "NextJS + GraphQL + TypeScript",
    description: "NextJS + GraphQL + TypeScript",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
  }
}
