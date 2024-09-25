/**
 * Defines the configuration for internationalization (i18n) in an application.
 *
 * @remarks
 * This configuration object is used to set up the locales, default locale, locale detection,
 * and locale prefix for the application.
 */
export const localeConfig: ILocaleConfig = {
  locales: ["en", "uk"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
}

/**
 * Interface representing the configuration for internationalization (i18n).
 */
interface ILocaleConfig {
  /**
   * An array of supported locales.
   */
  locales: string[]

  /**
   * The default locale for the application.
   */
  defaultLocale: string

  /**
   * A boolean indicating whether locale detection should be enabled.
   */
  localeDetection: boolean

  /**
   * The locale prefix for the application.
   *
   * @remarks
   * The value can be one of the following:
   * - "as-needed": The locale prefix is added only when necessary.
   * - "always": The locale prefix is always added.
   * - "never": The locale prefix is never added.
   */
  localePrefix: "as-needed" | "always" | "never"
}
