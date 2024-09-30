import type { IRouterLinkProps } from "@/shared/components/RouterLink"

export type LogoProps = Omit<IRouterLinkProps, "href" | "children">
