import cn from "classnames"

import React from "react"

import { IButtonProps } from "./Button.props"

export const Button: React.FC<IButtonProps> = ({ children, className, type, ...props }) => {
  return (
    <button
      className={cn(className)}
      type={type ?? "button"}
      {...props}
    >
      {children}
    </button>
  )
}
