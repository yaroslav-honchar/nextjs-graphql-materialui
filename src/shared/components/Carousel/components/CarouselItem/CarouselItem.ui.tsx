import React from "react"
import { Box } from "@mui/material"
import type { CarouselItemProps } from "./CarouselItem.props"

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>
}
