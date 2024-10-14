import * as nextIntl from "next-intl"
import { NextIntlClientProvider } from "next-intl"
import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import translatesEn from "../../_app/localization/translates/en.json"
import { NotFoundPage } from "./"

const translations: Record<string, Record<string, string>> = translatesEn

const renderWithIntl = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider
      locale="en"
      messages={{}}
    >
      {component}
    </NextIntlClientProvider>,
  )
}

describe("[PAGE]: NotFoundPage", () => {
  beforeEach(() => {
    // @ts-ignore
    jest.spyOn(nextIntl, "useTranslations").mockImplementation((namespace: string) => {
      return (key: string) => translations[namespace][key]
    })
  })

  it("renders headings", () => {
    renderWithIntl(<NotFoundPage />)

    const headingH1 = screen.getByRole("heading", { level: 1 })
    expect(headingH1).toBeInTheDocument()
    expect(headingH1).toHaveTextContent("404")

    const headingH2 = screen.getByRole("heading", { level: 2 })
    expect(headingH2).toBeInTheDocument()
  })

  it("renders a home link", () => {
    renderWithIntl(<NotFoundPage />)

    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
  })
})
