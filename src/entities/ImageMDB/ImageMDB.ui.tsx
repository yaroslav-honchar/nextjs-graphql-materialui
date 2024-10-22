import React from "react"
import { Image } from "@/shared/components/Image"
import type { IImageMDBProps, ImageType } from "./ImageMDB.props"
import { imageSizes } from "./ImageMDB.sizes"

export function ImageMDB<T extends ImageType = "poster">({
  imagetype = "poster" as T,
  width,
  path,
  alt,
  ...rest
}: IImageMDBProps<T>) {
  const height = Math.round((width as number) / imageSizes[imagetype].aspectRatio)
  const size =
    imagetype === "backdrop"
      ? `w${width as number}_and_h${height}_multi_faces`
      : `w${width as number}`

  const src = `https://media.themoviedb.org/t/p/${size}${path}`

  return (
    <Image
      src={src}
      alt={`${imagetype} of ${alt}`}
      width={width as number}
      height={height}
      {...rest}
    />
  )
}
