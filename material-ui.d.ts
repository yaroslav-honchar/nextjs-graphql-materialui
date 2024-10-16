import type { OverridableStringUnion } from "@mui/material/OverridableComponent"

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true
  }

  interface MuiButtonProps {
    variant?: OverridableStringUnion<
      "text" | "outlined" | "contained" | "link",
      ButtonPropsVariantOverrides
    >
  }
}
