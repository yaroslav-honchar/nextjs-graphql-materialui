import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import type { IVoteAverageProps } from "./VoteAverage.props"

const getColor = (value: number): string => {
  const hue = (value * 120).toString(10)
  return `hsl(${hue}, 100%, 50%)`
}

export const VoteAverage: React.FC<IVoteAverageProps> = ({ value }) => {
  const percentage = Math.min(Math.max(value * 10, 0), 100)

  return (
    <Box position="relative">
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={44}
        thickness={4}
        sx={{
          color: getColor(value),
        }}
      />
      <Typography
        variant="caption"
        component="div"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {`${percentage}%`}
      </Typography>
    </Box>
  )
}
