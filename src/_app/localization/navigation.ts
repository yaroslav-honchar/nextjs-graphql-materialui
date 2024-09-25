import React from "react"

import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { localeConfig } from "./config"

const { locales, localePrefix } = localeConfig

/**
 * This function creates and exports navigation utilities for a Next.js application with internationalization support.
 * It uses the `createSharedPathnamesNavigation` function from the "next-intl/navigation" package.
 *
 * @param locales - An array of supported locales.
 * @param localePrefix - The prefix for locale-specific routes.
 *
 * @returns An object containing the following navigation utilities:
 * - `Link`: A React component for creating locale-aware links.
 * - `redirect`: A function for redirecting to a locale-aware route.
 * - `usePathname`: A custom hook for accessing the current pathname with locale prefix.
 * - `useRouter`: A custom hook for accessing the Next.js router with locale prefix support.
 * - `LinkProps`: A type definition for the props of the `Link` component.
 */
const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})

type LinkProps = typeof Link extends React.FC<infer P> ? P : never

export { Link, redirect, usePathname, useRouter, type LinkProps }
