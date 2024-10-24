"use client"

import React from "react"
import { Link } from "@/_app/localization"
import { Button } from "@mui/material"
import type { RouterLinkProps } from "./RouterLink.props"

export const RouterLink: React.FC<RouterLinkProps> = ({
  locale,
  href,
  children,
  variant,
  color,
  role = "link",
  ...rest
}) => {
  return (
    <Button
      component={Link}
      locale={locale}
      href={href}
      variant={variant || "text"}
      color={color || "secondary"}
      role={role}
      {...rest}
    >
      {children}
    </Button>
  )
}
