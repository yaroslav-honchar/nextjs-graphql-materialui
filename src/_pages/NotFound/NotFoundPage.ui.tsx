import { useTranslations } from "next-intl"
import React from "react"
import { RouterLink } from "@/shared/components/RouterLink"
import { ClientRoutes } from "@/shared/routes"
import { Container, Typography } from "@mui/material"

export const NotFoundPage = () => {
  const tNotFound = useTranslations("NotFound")

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography
        component={"h1"}
        variant={"h1"}
        sx={{
          fontWeight: 700,
        }}
      >
        404
      </Typography>

      <Typography
        component={"h2"}
        variant={"h3"}
      >
        {tNotFound("title") || "Test title"}
      </Typography>

      <RouterLink
        href={ClientRoutes.home}
        variant={"contained"}
        sx={{
          mt: 2,
        }}
        aria-label={"Home"}
      >
        {tNotFound("go-home") || "Test link"}
      </RouterLink>
    </Container>
  )
}
