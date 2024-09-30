"use client"

import { useLocale } from "next-intl"
import React from "react"
import { usePathname, useRouter } from "@/_app/localization"
import { Button, Typography } from "@mui/material"

const size = 32

export const LangSwitcher: React.FC = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const nextLocale = locale === "en" ? "uk" : "en"

  const onClickHandle = () => {
    router.replace(pathname, { locale: nextLocale })
    router.refresh()
  }

  return (
    <Button
      sx={{
        display: "flex",
        textTransform: "uppercase",
        width: size,
        minWidth: size,
        height: size,
        minHeight: size,
        borderRadius: size,
        position: "relative",
        padding: 0,
        color: "background.default",
      }}
      variant={"contained"}
      color={"secondary"}
      onClick={onClickHandle}
      aria-label={`Switch to ${nextLocale} locale`}
    >
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
        component={"span"}
      >
        {nextLocale}
      </Typography>
    </Button>
  )
}
