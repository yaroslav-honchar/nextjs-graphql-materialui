import { render } from "@/shared/test-utils"
import type { RouterLinkProps } from "./RouterLink.props"
import { RouterLink } from "./RouterLink.ui"

describe("RouterLink Component", () => {
  it("renders correctly with required props", () => {
    const props: RouterLinkProps = { locale: "en", href: "/home", children: "Home" }
    const { getByText } = render(<RouterLink {...props} />)
    expect(getByText("Home")).toBeInTheDocument()
  })

  it("applies default variant and color if not provided", () => {
    const props: RouterLinkProps = { locale: "en", href: "/home", children: "Home" }
    const { getByText } = render(<RouterLink {...props} />)
    const button = getByText("Home")
    expect(button).toHaveClass("MuiButton-text")
    expect(button).toHaveClass("MuiButton-textSecondary")
  })

  it("applies provided variant and color", () => {
    const props: RouterLinkProps = {
      locale: "en",
      href: "/home",
      children: "Home",
      variant: "contained",
      color: "primary",
    }
    const { getByText } = render(<RouterLink {...props} />)
    const button = getByText("Home")
    expect(button).toHaveClass("MuiButton-contained")
    expect(button).toHaveClass("MuiButton-containedPrimary")
  })

  it("passes additional props to Button component", () => {
    const props: RouterLinkProps & { "data-testid": string } = {
      locale: "en",
      href: "/home",
      children: "Home",
      "data-testid": "router-link",
    }
    const { getByTestId } = render(<RouterLink {...props} />)
    expect(getByTestId("router-link")).toBeInTheDocument()
  })
})
