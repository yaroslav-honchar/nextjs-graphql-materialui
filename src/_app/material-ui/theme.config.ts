"use client"

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-primary)",
  },
  palette: {
    primary: {
      light: "#CFFFEA",
      main: "#9AF7E0",
      dark: "#67C4AE",
    },
    secondary: {
      main: "#A2A7F0",
      light: "#dbdeff",
      dark: "#7074B3",
    },
    error: {
      light: "#ffb3b3",
      main: "#ffccbc",
      dark: "#c65d5d",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#fff59d",
      main: "#ffe082",
      dark: "#ffb300",
      contrastText: "#000000",
    },
    info: {
      light: "#81d4fa",
      main: "#81d4fa",
      dark: "#0091ea",
      contrastText: "#ffffff",
    },
    success: {
      light: "#c8e6c9",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
  },
})

export { theme }
