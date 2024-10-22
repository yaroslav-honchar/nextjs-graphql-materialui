import type { RouterLinkProps } from "@/shared/components/RouterLink"

export type LogoProps = Omit<RouterLinkProps, "href" | "children">
