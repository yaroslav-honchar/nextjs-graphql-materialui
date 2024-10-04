"use client"

import React from "react"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Button, List, ListItem } from "@mui/material"

const actions = [
  {
    label: "Favorite",
    icon: FavoriteIcon,
  },
  {
    label: "Watchlist",
    icon: BookmarkIcon,
  },
]

export const CardMovieActions: React.FC = () => {
  return (
    <List>
      {actions.map(({ label, icon: Icon }) => (
        <ListItem
          key={label}
          disablePadding
        >
          <Button
            startIcon={<Icon />}
            variant={"text"}
            sx={{
              color: "text.primary",
            }}
          >
            {label}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}
