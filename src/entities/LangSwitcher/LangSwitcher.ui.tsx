"use client"

import { useLocale } from "next-intl"
import React from "react"
import { usePathname } from "@/_app/localization"
import { RouterLink } from "@/shared/components/RouterLink"

export const LangSwitcher: React.FC = () => {
  const locale = useLocale()
  const pathName = usePathname()

  return (
    <RouterLink
      sx={{ textTransform: "uppercase" }}
      href={pathName}
      locale={locale === "en" ? "uk" : "en"}
    >
      {locale === "en" ? "uk" : "en"}
    </RouterLink>
  )
}
