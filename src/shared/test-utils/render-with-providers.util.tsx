import { NextIntlClientProvider } from "next-intl"
import type { PropsWithChildren, ReactElement } from "react"
import React from "react"
import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <NextIntlClientProvider
      locale={"en"}
      messages={{}}
    >
      {children}
    </NextIntlClientProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from "@testing-library/react"
export { customRender as render }
