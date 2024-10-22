import React, { useState } from "react"
import { Box } from "@mui/material"
import { CarouselContext } from "./Carousel.context"
import type { ICarouselProps } from "./Carousel.props"

export const Carousel: React.FC<ICarouselProps> = ({ children, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
      }}
    >
      <Box {...rest}>{children}</Box>
    </CarouselContext.Provider>
  )
}
