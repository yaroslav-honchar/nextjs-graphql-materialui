import type { SxProps } from "@mui/system"

export const styles: Record<string, SxProps> = {
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // height: "75svh",
    paddingBlock: 4,
  },
  backdropWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "rgba(0, 0, 0, 0.5)",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
      background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3996192226890757) 100%)",
    },
  },
  backdropImage: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    aspectRatio: "16/9",
  },
  movieInfoWrap: {
    display: "flex",
    gap: 2,
    m: "auto",
    paddingInline: "84px",
  },
  movieInfoPoster: {
    width: 280,
    minWidth: 280,
    height: "auto",
    aspectRatio: "2/3",
    objectFit: "contain",
  },
  movieInfoDescription: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    paddingBlock: 4,
  },
  carouselButton: {
    display: "block",
    height: "100%",
    width: "64px",
  },
}