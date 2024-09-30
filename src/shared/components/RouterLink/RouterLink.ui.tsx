import React from "react"
import { Link } from "@/_app/localization"
import { styled } from "@mui/material/styles"
import type { IRouterLinkProps } from "./RouterLink.props"

export const StyledRouterLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
})

export const RouterLink: React.FC<IRouterLinkProps> = ({ locale, href, children, ...rest }) => {
  return (
    <StyledRouterLink
      locale={locale}
      href={href}
      {...rest}
    >
      {children}
    </StyledRouterLink>
  )
}
