import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import { localeConfig } from "./config"

const { locales } = localeConfig

/**
 * Creates localization middleware for Next.js applications using the `next-intl` library.
 * This middleware checks the incoming request's locale against the configured locales and
 * imports the corresponding translation messages from a JSON file.
 *
 * @param getRequestConfig - A function provided by the `next-intl` library that returns a configuration object for the request.
 * @returns A function that handles localization middleware logic.
 */
const createLocalizationMiddleware = getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`./translates/${locale}.json`)).default,
  }
})
export default createLocalizationMiddleware
