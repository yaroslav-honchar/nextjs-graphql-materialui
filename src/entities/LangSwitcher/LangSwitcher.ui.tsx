"use client"

import { useLocale } from "next-intl"
import React from "react"
import { usePathname, useRouter } from "@/_app/localization"
import { Button } from "@mui/material"

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
      sx={{ textTransform: "uppercase" }}
      onClick={onClickHandle}
    >
      {nextLocale}
    </Button>
  )
}
