import { PropsWithChildren } from "react"

export interface ILocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: string
  }
}
