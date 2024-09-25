import cn from "classnames"
import React from "react"
import { ISectionProps } from "./Section.props"

export const Section: React.FC<ISectionProps> = ({ children, className }) => {
  return <section className={cn("py-12", className)}>{children}</section>
}
