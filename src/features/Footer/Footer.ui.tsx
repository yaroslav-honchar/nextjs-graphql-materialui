import React from "react"
import { Container } from "@/shared/components"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={"pb-8"}>
      <Container>
        <p className={"text-center"}>{currentYear}</p>
      </Container>
    </footer>
  )
}
