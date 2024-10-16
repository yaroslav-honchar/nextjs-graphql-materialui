import { format } from "date-fns"
import React from "react"
import { fireEvent, render, screen } from "@/shared/test-utils"
import type { MoviePreviewType } from "@/shared/types"
import { CardMovie } from "./CardMovie.ui"

const mockMovie: MoviePreviewType = {
  id: 1,
  title: "Test Movie",
  poster_path: "test_poster_path.jpg",
  release_date: "2023-10-01",
  vote_average: 7.5,
  vote_count: 100,
}

describe("[FEATURE] CardMovie", () => {
  it("renders movie title and formatted release date", () => {
    render(<CardMovie movie={mockMovie} />)
    expect(screen.getByText("Test Movie")).toBeInTheDocument()
    expect(
      screen.getByText(format(new Date(mockMovie.release_date), "EEEEEE MM.dd.yyyy")),
    ).toBeInTheDocument()
  })

  it("opens and closes the action popover", async () => {
    render(<CardMovie movie={mockMovie} />)
    const button = screen.getByLabelText("Actions of Test Movie movie")
    fireEvent.click(button)
    expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
