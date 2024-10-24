import { render } from "@/shared/test-utils"
import type { IVoteAverageProps } from "./VoteAverage.props"
import { VoteAverage } from "./VoteAverage.ui"

describe("VoteAverage Component", () => {
  it("renders correctly with a valid value", () => {
    const props: IVoteAverageProps = { value: 8 }
    const { getByText } = render(<VoteAverage {...props} />)
    expect(getByText("80%")).toBeInTheDocument()
  })

  it("renders correctly with a value of 0", () => {
    const props: IVoteAverageProps = { value: 0 }
    const { getByText } = render(<VoteAverage {...props} />)
    expect(getByText("0%")).toBeInTheDocument()
  })

  it("renders correctly with a value of 1", () => {
    const props: IVoteAverageProps = { value: 10 }
    const { getByText } = render(<VoteAverage {...props} />)
    expect(getByText("100%")).toBeInTheDocument()
  })

  it("applies correct color based on value", () => {
    const props: IVoteAverageProps = { value: 0.5 }
    const { container } = render(<VoteAverage {...props} />)
    const circularProgress = container.querySelector(".MuiCircularProgress-root")
    expect(circularProgress).toHaveStyle("color: hsl(60, 100%, 50%)")
  })

  it("handles edge case with negative value", () => {
    const props: IVoteAverageProps = { value: -1 }
    const { getByText } = render(<VoteAverage {...props} />)
    expect(getByText("0%")).toBeInTheDocument()
  })

  it("handles edge case with value greater than 1", () => {
    const props: IVoteAverageProps = { value: 10.1 }
    const { getByText } = render(<VoteAverage {...props} />)
    expect(getByText("100%")).toBeInTheDocument()
  })
})
