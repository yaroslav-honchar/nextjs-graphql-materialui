"use client"

import { createTheme } from "@mui/material/styles"

const palette = {
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
}

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-primary)",
  },
  palette,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: "link" },
          style: {
            padding: 0,
          },
        },
        {
          props: { variant: "link", color: "primary" },
          style: {
            color: palette.primary.light,
            "&:hover": {
              color: palette.primary.main,
            },
          },
        },
        {
          props: { variant: "link", color: "secondary" },
          style: {
            color: palette.secondary.light,
            "&:hover": {
              color: palette.secondary.dark,
            },
          },
        },
        {
          props: { variant: "link", color: "info" },
          style: {
            color: palette.info.light,
            "&:hover": {
              color: palette.info.dark,
            },
          },
        },
        {
          props: { variant: "link", color: "warning" },
          style: {
            color: palette.warning.light,
            "&:hover": {
              color: palette.warning.dark,
            },
          },
        },
        {
          props: { variant: "link", color: "error" },
          style: {
            color: palette.error.light,
            "&:hover": {
              color: palette.error.dark,
            },
          },
        },
      ],
    },
  },
})
