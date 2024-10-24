import { render } from "@/shared/test-utils"
import { Image } from "./Image.ui"

describe("Image Component", () => {
  it("renders correctly with required props", () => {
    const { getByAltText } = render(
      <Image
        src={"/test.jpg"}
        alt={"Test Image"}
        width={100}
        height={100}
      />,
    )

    const img = getByAltText("Test Image")
    expect(img).toHaveAttribute("alt", "Test Image")
    expect(img).toHaveAttribute("width", "100")
    expect(img).toHaveAttribute("height", "100")
  })
})
