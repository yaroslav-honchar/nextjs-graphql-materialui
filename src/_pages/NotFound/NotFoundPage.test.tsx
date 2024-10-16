import React from "react"
import { render, screen } from "@/shared/test-utils"
import { NotFoundPage } from "./"

describe("[PAGE]: NotFoundPage", () => {
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
