import type { Metadata } from "next"

import React from "react"

import "@/_app/styles/main.scss"

export const metadata: Metadata = {
  icons: "/icon.png",
}

export default function Layout({ children }: React.PropsWithChildren) {
  return children
}
