import React from "react"
import { render } from "@/shared/test-utils"
import { Logo } from "./Logo.ui"

describe("Logo Component", () => {
  it("renders correctly with default props", () => {
    const { getByText, getByRole } = render(<Logo />)
    const link = getByRole("link")
    const text = getByText("Movie")
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/en")
    expect(text).toBeInTheDocument()
  })

  it("applies custom styles correctly", () => {
    const { getByRole } = render(<Logo sx={{ color: "rgb(25, 118, 210)" }} />)
    const link = getByRole("link")
    expect(link).toHaveStyle("color: rgb(25, 118, 210)")
  })

  it("applies hover styles correctly", () => {
    const { getByRole } = render(<Logo />)
    const link = getByRole("link")
    expect(link).toHaveStyle("transition: color .3s")
  })
})
