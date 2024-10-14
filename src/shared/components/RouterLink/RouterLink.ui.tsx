"use client"

import React from "react"
import type { LinkProps } from "@/_app/localization"
import { Link } from "@/_app/localization"
import type { ButtonProps } from "@mui/material"
import { Button } from "@mui/material"

export const RouterLink: React.FC<LinkProps & ButtonProps> = ({
  locale,
  href,
  children,
  variant,
  color,
  ...rest
}) => {
  return (
    <Button
      component={Link}
      locale={locale}
      href={href}
      variant={variant || "text"}
      color={color || "secondary"}
      {...rest}
    >
      {children}
    </Button>
  )
}
