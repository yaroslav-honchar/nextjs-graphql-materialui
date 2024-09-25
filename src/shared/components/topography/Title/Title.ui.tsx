import cn from "classnames"
import React from "react"
import { ITitleProps } from "./Title.props"

export const Title: React.FC<ITitleProps> = ({ htmlTag = "h2", children, className, ...props }) => {
  const properties = {
    className: cn(className),
    ...props,
  }

  switch (htmlTag) {
    case "h1":
      return <h1 {...properties}>{children}</h1>
    case "h2":
      return <h2 {...properties}>{children}</h2>
    case "h3":
      return <h3 {...properties}>{children}</h3>
    case "h4":
      return <h4 {...properties}>{children}</h4>
    case "h5":
      return <h5 {...properties}>{children}</h5>
    case "h6":
      return <h6 {...properties}>{children}</h6>
    default:
      return <span {...properties}>{children}</span>
  }
}
