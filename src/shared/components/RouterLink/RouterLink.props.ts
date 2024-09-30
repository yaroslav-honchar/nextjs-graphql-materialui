import type React from "react"
import type { LinkProps } from "@/_app/localization"
import type { StyledRouterLink } from "./RouterLink.ui"

export type IRouterLinkProps = LinkProps & React.ComponentProps<typeof StyledRouterLink>
