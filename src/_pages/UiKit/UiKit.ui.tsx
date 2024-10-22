import { RouterLink } from "@/shared/components/RouterLink"
import { Box, Button, Container, Typography } from "@mui/material"
import { unstable_setRequestLocale } from "next-intl/server"
import type { IUiKitProps } from "./UiKit.props"
import { buttons, routerLinks } from "./fixtures"

export async function UiKit({ params: { locale } }: IUiKitProps) {
  unstable_setRequestLocale(locale)

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Typography variant={"h3"}>Button</Typography>
          {buttons.map(({ variant, color, ...rest }, index) => (
            <Button
              key={`${variant}-${color}-${index}`}
              variant={variant}
              color={color}
              sx={{ width: "fit-content" }}
              {...rest}
            >
              {variant} {color}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Typography variant={"h3"}>RouterLink</Typography>
          {routerLinks.map(({ variant, color, ...rest }, index) => (
            <RouterLink
              key={`${variant}-${color}-${index}`}
              href={"/"}
              variant={variant}
              color={color}
              sx={{ width: "fit-content" }}
              {...rest}
            >
              {variant} {color}
            </RouterLink>
          ))}
        </Box>
      </Box>
    </Container>
  )
}
