"use client"

import { useLocale } from "next-intl"
import React from "react"
import { usePathname, useRouter } from "@/_app/localization"
import LanguageIcon from "@mui/icons-material/Language"
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
      sx={{
        display: "flex",
        textTransform: "uppercase",
        with: 40,
        height: 40,
      }}
      variant={"contained"}
      color={"secondary"}
      onClick={onClickHandle}
    >
      <LanguageIcon
        sx={{
          with: 32,
          height: 32,
        }}
      />
      {/*{nextLocale}*/}
    </Button>
  )
}
