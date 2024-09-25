"use client"

import { useTheme } from "next-themes"

import React from "react"

import { MoonIcon, SunIcon } from "./icons"

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return <button onClick={toggleTheme}>{theme === "light" ? <SunIcon /> : <MoonIcon />}</button>
}
