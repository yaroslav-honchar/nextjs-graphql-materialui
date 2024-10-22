import { createContext, useContext } from "react"

export interface ICarouselContext {
  activeIndex?: number
  setActiveIndex?: (index: number) => void
}

const defaultContext: ICarouselContext = {
  activeIndex: 0,
  setActiveIndex: () => {},
}

export const useCarouselContext = (): ICarouselContext => {
  const context = useContext<ICarouselContext>(CarouselContext)
  if (!context) {
    throw new Error("useCarouselContext must be used within a CarouselProvider")
  }
  return context
}

export const CarouselContext = createContext<ICarouselContext>(defaultContext)
