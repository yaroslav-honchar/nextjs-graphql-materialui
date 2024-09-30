"use client"

import React from "react"
import { RouterLink } from "@/shared/components/RouterLink"
import { Typography } from "@mui/material"
import type { LogoProps } from "./Logo.props"

export const Logo: React.FC<LogoProps> = ({ sx, ...rest }) => {
  return (
    <RouterLink
      href={"/"}
      sx={{
        ...sx,
        transition: "color .3s",
        "&:hover": {
          color: "primary.main",
        },
      }}
      {...rest}
    >
      <Typography
        variant="h6"
        component={"span"}
      >
        Movies
      </Typography>
    </RouterLink>
  )
}
