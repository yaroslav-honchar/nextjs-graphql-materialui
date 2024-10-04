"use client"

import React from "react"
import { Skeleton } from "@mui/material"

export const CardMovieSkeleton: React.FC = () => {
  return (
    <Skeleton
      variant="rounded"
      width={"100%"}
      height={291}
    />
  )
}
