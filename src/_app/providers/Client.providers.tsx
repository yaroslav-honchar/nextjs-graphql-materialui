"use client"

import { ThemeProvider } from "next-themes"

import React, { type PropsWithChildren } from "react"

import { useMounted } from "@/shared/hooks"

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const isMounted = useMounted()

  if (!isMounted) {
    return children
  }

  return <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
}
