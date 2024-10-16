"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-primary)",
  },
  palette: {
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#2B2B2B",
    },
    primary: {
      light: "#FF6F61",
      main: "#D32F2F",
      dark: "#B71C1C",
    },
    secondary: {
      main: "#A4D8E1",
      light: "#91C4D7",
      dark: "#7FAFD1",
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
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //     variants: [
  //       {
  //         props: { variant: "link" },
  //         style: {
  //           // color: "inherit",
  //         },
  //       },
  //     ],
  //   },
  // },
})
