"use client"

import type { PropsWithChildren } from "react"
import React, { useEffect, useRef, useState } from "react"
import { throttle } from "@/shared/lib"
import { DocumentWorker } from "@/shared/utils"
import { Box } from "@mui/material"

export const HeaderClient: React.FC<PropsWithChildren> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const currentScrollYPosition = useRef<number>(0)
  const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true)

  useEffect((): (() => void) | void => {
    const headerEl = headerRef.current
    if (!headerEl) {
      return
    }

    const updateHeaderCSSVariables = (): void => {
      DocumentWorker.setCSSVar("header-height", `${headerEl.offsetHeight}px`)
    }

    const updateHeaderVisibleOnMousemoveHandler = ({ clientY }: MouseEvent): void => {
      if (clientY >= headerEl.offsetHeight) {
        setHeaderVisible(true)
      }
    }

    const updateHeaderVisibleOnScrollHandler = (): void => {
      if (
        currentScrollYPosition.current < window.scrollY &&
        window.scrollY > headerEl.offsetHeight
      ) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }

      currentScrollYPosition.current = window.scrollY
    }

    updateHeaderVisibleOnScrollHandler()

    setTimeout(() => {
      updateHeaderCSSVariables()
    }, 100)

    const windowResizeHandler = throttle<(event: UIEvent) => void>((): void => {
      updateHeaderCSSVariables()
    }, 100)
    const windowMousemoveHandler = throttle<(event: MouseEvent) => void>(
      updateHeaderVisibleOnMousemoveHandler,
      75,
    )
    const windowScrollHandler = throttle<(event: Event) => void>(
      updateHeaderVisibleOnScrollHandler,
      50,
    )

    window.addEventListener("resize", windowResizeHandler)
    window.addEventListener("mousemove", windowMousemoveHandler)
    window.addEventListener("scroll", windowScrollHandler)

    return (): void => {
      window.removeEventListener("resize", windowResizeHandler)
      window.removeEventListener("mousemove", windowMousemoveHandler)
      window.removeEventListener("scroll", windowScrollHandler)
    }
  }, [headerRef, currentScrollYPosition, setHeaderVisible])

  return (
    <Box
      ref={headerRef}
      component={"header"}
      sx={{
        background: (theme) => theme.palette.background.default,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        transition: "transform .3s",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      {children}
    </Box>
  )
}
