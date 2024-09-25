"use client"

import { useLocale } from "next-intl"
import React from "react"
import { Link, usePathname } from "@/_app/localization"

export const LangSwitcher: React.FC = () => {
  const locale = useLocale()
  const pathName = usePathname()

  return (
    <Link
      className={"uppercase"}
      href={pathName}
      locale={locale === "en" ? "uk" : "en"}
    >
      {locale}
    </Link>
  )
}
