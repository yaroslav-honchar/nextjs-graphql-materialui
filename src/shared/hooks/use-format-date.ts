import { format as formatFNS } from "date-fns"
import { useLocale } from "next-intl"
import type { FormatOptions } from "date-fns/format"
import { enUS, uk } from "date-fns/locale"

const dateLocales = {
  uk,
  en: enUS,
}

export const useFormatDate = () => {
  const locale = useLocale() as "uk" | "en"
  const dateLocale = dateLocales[locale] || dateLocales.en

  const format = (
    date: string,
    formatStr: string = "dd MMMM yyyy",
    options: FormatOptions = {},
  ): string => {
    return formatFNS(date, formatStr, { locale: dateLocale, ...options })
  }

  return { format }
}
