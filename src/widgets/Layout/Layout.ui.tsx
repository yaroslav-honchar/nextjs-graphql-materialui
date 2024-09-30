import React from "react"
import { ClientProviders, ServerProviders } from "@/_app/providers"
import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import { Box } from "@mui/material"
import type { ILayoutProps } from "./Layout.props"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <ClientProviders>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Box
            component={"main"}
            sx={{ flexGrow: 1, paddingTop: "var(--header-height)", overflow: "hidden" }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </ClientProviders>
    </ServerProviders>
  )
}
