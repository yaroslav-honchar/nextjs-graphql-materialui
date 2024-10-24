import React from "react"
import { fontSecondary } from "@/_app/fonts"
import { RouterLink } from "@/shared/components/RouterLink"
import { Typography } from "@mui/material"
import { LogoIcon } from "./Logo.icon"
import type { LogoProps } from "./Logo.props"

export const Logo: React.FC<LogoProps> = ({ sx, ...rest }) => {
  return (
    <RouterLink
      href={"/"}
      sx={{
        ...sx,
        display: "flex",
        alignItems: "center",
        transition: "color .3s",
        "&:hover": {
          color: "primary.main",
        },
      }}
      {...rest}
    >
      <LogoIcon
        sx={{
          width: 40,
          height: 40,
          mr: 0.5,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontFamily: fontSecondary.style.fontFamily,
          fontWeight: 500,
        }}
        component={"span"}
      >
        Movie
      </Typography>
    </RouterLink>
  )
}
