import { NextIntlClientProvider, useMessages } from "next-intl"
import React from "react"
import { theme } from "@/_app/material-ui"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import { unstable_setRequestLocale } from "next-intl/server"

export const ServerProviders: React.FC<IProvidersProps> = ({ children, locale }) => {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  )
}

export interface IProvidersProps extends React.PropsWithChildren {
  locale: string
}
