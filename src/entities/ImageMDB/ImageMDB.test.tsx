import React from "react"
import { render } from "@/shared/test-utils"
import { ImageMDB } from "./ImageMDB.ui"

describe("ImageMDB Component", () => {
  it("renders correctly with poster imagetype", () => {
    const { getByAltText } = render(
      <ImageMDB
        imagetype={"poster"}
        width={500}
        path="/test-path.jpg"
        alt="Test Image"
      />,
    )

    const url = "https://media.themoviedb.org/t/p/w500/test-path.jpg"
    const encodedUrl = encodeURIComponent(url)

    const image = getByAltText("poster of Test Image")

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", expect.stringMatching(new RegExp(encodedUrl)))
    expect(image).toHaveAttribute("width", "500")
    expect(image).toHaveAttribute("height", "750")
  })

  it("renders correctly with backdrop imagetype", () => {
    const { getByAltText } = render(
      <ImageMDB
        imagetype={"backdrop"}
        width={1920}
        path="/test-path.jpg"
        alt="Test Image"
      />,
    )
    const url = "https://media.themoviedb.org/t/p/w1920_and_h1080_multi_faces/test-path.jpg"
    const encodedUrl = encodeURIComponent(url)

    const image = getByAltText("backdrop of Test Image")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", expect.stringMatching(new RegExp(encodedUrl)))
    expect(image).toHaveAttribute("width", "1920")
    expect(image).toHaveAttribute("height", "1080")
  })
})
