import React from "react"
import type { LinkProps } from "@/_app/localization"
import { Link } from "@/_app/localization"
import { styled } from "@mui/material/styles"

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
})

export type RouterLinkkProps = LinkProps & React.ComponentProps<typeof StyledLink>

export const RouterLink: React.FC<RouterLinkkProps> = ({ locale, href, children, ...rest }) => {
  return (
    <StyledLink
      locale={locale}
      href={href}
      {...rest}
    >
      {children}
    </StyledLink>
  )
}
