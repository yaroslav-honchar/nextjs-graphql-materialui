import React from "react"
import { LangSwitcher } from "@/entities/LangSwitcher"
import { Box, Container } from "@mui/material"

export const Header: React.FC = () => {
  return (
    <Box sx={{ paddingBlock: "1rem" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <LangSwitcher />
      </Container>
    </Box>
  )
}
