import React from "react"

import { interFont } from "@/_app/fonts"
import { localeConfig } from "@/_app/localization"

import { Layout } from "@/widgets/Layout"
import { unstable_setRequestLocale } from "next-intl/server"

import { ILocaleLayoutProps } from "./layout.props"

export { metadata } from "./layout.metadata"

export function generateStaticParams() {
  return localeConfig.locales.map((locale: string) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<ILocaleLayoutProps>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={interFont.className}>
        <Layout locale={locale}>{children}</Layout>
      </body>
    </html>
  )
}
