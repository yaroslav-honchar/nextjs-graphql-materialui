import { localeConfig } from "@/_app/localization"

import createMiddleware from "next-intl/middleware"

const { localePrefix, locales, defaultLocale, localeDetection } = localeConfig

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
})

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|svg|Img|videos|favicon.ico|icon.png|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
  ],
}
