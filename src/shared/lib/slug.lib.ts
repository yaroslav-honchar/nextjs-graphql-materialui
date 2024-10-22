import slug from "slug"

const separator = "__"

export const generateSlug = (title: string, id: number | string): string => {
  const newSlug = slug(title, { lower: true })
  return `${newSlug}${separator}${id}`
}

export const getIdFromSlug = (slug: string): string | undefined => {
  return slug.split(separator)[1]
}
