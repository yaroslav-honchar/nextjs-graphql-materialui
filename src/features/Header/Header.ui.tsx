import React from "react"
import { LangSwitcher } from "@/entities/LangSwitcher"
import { Logo } from "@/entities/Logo/Logo.ui"
import { Box, Container } from "@mui/material"
import { HeaderClient } from "./Header.client"

export const Header: React.FC = () => {
  return (
    <HeaderClient>
      <Box sx={{ paddingBlock: "1rem" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <Logo
            sx={{
              marginRight: "auto",
            }}
          />
          <LangSwitcher />
        </Container>
      </Box>
    </HeaderClient>
  )
}
