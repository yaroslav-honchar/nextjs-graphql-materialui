import cn from "classnames"

import React from "react"

import { Link } from "@/_app/localization"

import { IRootLinkProps } from "./RootLink.props"

export const RootLink: React.FC<IRootLinkProps> = ({
  href,
  locale,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={cn(className)}
      href={href}
      {...(locale ? { locale } : {})}
      {...props}
    >
      {children}
    </Link>
  )
}
