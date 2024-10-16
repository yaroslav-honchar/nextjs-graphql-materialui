"use client"

import { format } from "date-fns"
import React, { type MouseEvent, useState } from "react"
import { Image } from "@/shared/components/Image"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Box, Button, Card, CardContent, List, ListItem, Popover, Typography } from "@mui/material"
import { actions } from "./CardMovie.actions"
import type { ICardMovieProps } from "./CardMovie.props"

export const CardMovie: React.FC<ICardMovieProps> = ({ movie }) => {
  const { poster_path, title, release_date } = movie
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List role={"list"}>
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
      </Popover>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1/1.4",
          }}
        >
          <Button
            className={"movie-card-action-popup-button"}
            variant="contained"
            onClick={handleClick}
            sx={{
              position: "absolute",
              top: "4px",
              right: "4px",
              padding: 0,
              width: 32,
              minWidth: 32,
              height: 32,
              minHeight: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
              color: "rgba(255, 255, 255, 1)",
            }}
            aria-describedby={`Actions of ${title} movie`}
            aria-label={`Actions of ${title} movie`}
          >
            <MoreHorizIcon />
          </Button>

          <Image
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
            }}
            height={330}
            width={220}
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
            alt={title}
          />
        </Box>
        <CardContent
          sx={{
            height: 75,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: "4px",
            left: "4px",
            width: "calc(100% - 8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            color: "rgba(255, 255, 255, 1)",
            padding: "12px",
            paddingBottom: "12px",
            borderRadius: "14px",
            "&:last-child": {
              paddingBottom: "12px",
            },
          }}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              textOverflow: "ellipsis",
              overflow: "hidden",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              fontWeight: 600,
            }}
            variant="subtitle2"
            component="p"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              mt: "auto",
            }}
            variant="caption"
            component="p"
          >
            {format(new Date(release_date), "EEEEEE MM.dd.yyyy")}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
