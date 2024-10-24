import { useLocale } from "next-intl"
import React from "react"
import { usePathname, useRouter } from "@/_app/localization"
import { fireEvent, render } from "@testing-library/react"
import { LangSwitcher } from "./LangSwitcher.ui"

jest.mock("@/_app/localization")
jest.mock("next-intl")

describe("LangSwitcher Component", () => {
  it("renders correctly with initial locale", () => {
    ;(useLocale as jest.Mock).mockReturnValue("en")
    const { getByText } = render(<LangSwitcher />)
    const button = getByText("uk")
    expect(button).toBeInTheDocument()
  })

  it("switches to 'uk' locale when current locale is 'en'", () => {
    ;(useLocale as jest.Mock).mockReturnValue("en")

    const mockReplace = jest.fn()
    const mockRefresh = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ replace: mockReplace, refresh: mockRefresh })
    ;(usePathname as jest.Mock).mockReturnValue("/current-path")

    const { getByLabelText } = render(<LangSwitcher />)
    const button = getByLabelText("Switch to uk locale")
    fireEvent.click(button)

    expect(mockReplace).toHaveBeenCalledWith("/current-path", { locale: "uk" })
    expect(mockRefresh).toHaveBeenCalled()
  })

  it("switches to 'en' locale when current locale is 'uk'", () => {
    ;(useLocale as jest.Mock).mockReturnValue("uk")
    const mockReplace = jest.fn()
    const mockRefresh = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ replace: mockReplace, refresh: mockRefresh })
    ;(usePathname as jest.Mock).mockReturnValue("/current-path")

    const { getByLabelText } = render(<LangSwitcher />)
    const button = getByLabelText("Switch to en locale")
    fireEvent.click(button)

    expect(mockReplace).toHaveBeenCalledWith("/current-path", { locale: "en" })
    expect(mockRefresh).toHaveBeenCalled()
  })

  it("renders correctly with 'uk' locale", () => {
    ;(useLocale as jest.Mock).mockReturnValue("uk")
    const { getByText } = render(<LangSwitcher />)
    const button = getByText("en")
    expect(button).toBeInTheDocument()
  })
})
