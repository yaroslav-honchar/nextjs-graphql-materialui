import type React from "react"
import type { LinkProps } from "@/_app/localization"
import type { Button } from "@mui/material"

export type IRouterLinkProps = LinkProps & React.ComponentProps<typeof Button>
