import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { NotFoundPage } from "./"

describe("[PAGE]: NotFoundPage", () => {
  it("renders a heading", () => {
    render(<NotFoundPage />)

    const heading = screen.getByRole("heading", { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("404")
  })
})
