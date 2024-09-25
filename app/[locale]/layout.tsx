import type { Metadata } from "next"

import React, { PropsWithChildren } from "react"

import { interFont } from "@/_app/fonts"
import { localeConfig } from "@/_app/localization"

import { Layout } from "@/widgets/Layout"
import { unstable_setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "NextJS + GraphQL + TypeScript",
  description: "NextJS + GraphQL + TypeScript",
}

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

export interface ILocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: string
  }
}
