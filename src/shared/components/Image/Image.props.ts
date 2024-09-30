import type React from "react"
import type { ImageProps as NextImageProps } from "next/dist/shared/lib/get-img-props"
import type { StyledNextImage } from "./Image.ui"

export type IImageProps = NextImageProps & React.ComponentProps<typeof StyledNextImage>
