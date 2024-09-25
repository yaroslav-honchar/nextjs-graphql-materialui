import React from "react"
import type { ImageProps } from "next/image"
import Image from "next/image"

export const Img: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <Image
      alt={alt}
      src={src}
      {...props}
    />
  )
}
