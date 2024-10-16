import * as nextIntl from "next-intl"
import React from "react"
import translatesEn from "@/_app/localization/translates/en.json"
import { render, screen } from "@/shared/test-utils/render-with-providers.util"
import { NotFoundPage } from "./"

const translations: Record<string, Record<string, string>> = translatesEn

describe("[PAGE]: NotFoundPage", () => {
  beforeEach(() => {
    // @ts-ignore
    jest.spyOn(nextIntl, "useTranslations").mockImplementation((namespace: string) => {
      return (key: string) => translations[namespace][key]
    })
  })

  it("renders headings", () => {
    render(<NotFoundPage />)

    const headingH1 = screen.getByRole("heading", { level: 1 })
    expect(headingH1).toBeInTheDocument()
    expect(headingH1).toHaveTextContent("404")

    const headingH2 = screen.getByRole("heading", { level: 2 })
    expect(headingH2).toBeInTheDocument()
  })

  it("renders a home link", () => {
    render(<NotFoundPage />)

    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
  })
})
