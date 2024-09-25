import cn from "classnames"

import React from "react"

import { IContainerProps } from "./Container.props"

export const Container: React.FC<IContainerProps> = ({ children, className, size = "2xl" }) => {
  return (
    <div
      className={cn("container w-full px-6 mx-auto", className, {
        "max-w-[20rem]": size === "sm",
        "max-w-[40rem]": size === "md",
        "max-w-[60rem]": size === "lg",
        "max-w-[80rem]": size === "xl",
        "max-w-[100rem]": size === "2xl",
        "max-w-[120rem]": size === "3xl",
      })}
    >
      {children}
    </div>
  )
}
