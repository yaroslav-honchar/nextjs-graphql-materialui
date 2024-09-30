import React from "react"
import { styled } from "@mui/material/styles"
import NextImage from "next/image"
import type { IImageProps } from "./Image.props"

export const StyledNextImage = styled(NextImage)()

export const Image: React.FC<IImageProps> = (props) => {
  return <StyledNextImage {...props} />
}
