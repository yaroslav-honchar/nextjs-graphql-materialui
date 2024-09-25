import type { DetailedHTMLProps, HTMLAttributes } from "react"

/**
 * xs - 375
 * sm - 576
 * md - 768
 * lg - 1024
 * xl - 1200
 * 2xl - 1400
 * 3xl - 1600
 * */
export interface IContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}
