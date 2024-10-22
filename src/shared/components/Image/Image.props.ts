import type { ComponentProps } from "react"
import type { ImageProps as NextImageProps } from "next/image"
import type { StyledNextImage } from "./Image.ui"

export interface IImageProps extends NextImageProps, ComponentProps<typeof StyledNextImage> {}
