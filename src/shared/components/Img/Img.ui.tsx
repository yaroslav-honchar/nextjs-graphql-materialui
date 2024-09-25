import React from "react"

import Image, { ImageProps } from "next/image"

export const Img: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <Image
      alt={alt}
      src={src}
      {...props}
    />
  )
}
