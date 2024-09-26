import React from "react"
import { Container, Typography } from "@mui/material"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Typography variant={"caption"}>{currentYear}</Typography>
      </Container>
    </footer>
  )
}
