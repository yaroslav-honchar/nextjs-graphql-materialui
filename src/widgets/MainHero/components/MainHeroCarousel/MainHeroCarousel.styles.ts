import type { SxProps } from "@mui/system"

export const styles: Record<string, SxProps> = {
  backdropCarousel: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
      background: {
        xs: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 100%)",
        md: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%)",
      },
      backdropFilter: "blur(2px)",
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
  movieCarousel: {
    paddingLeft: {
      lg: "84px",
    },
    paddingRight: {
      lg: "84px",
    },
  },
  movieCarouselSlide: {
    display: "flex",
    alignItems: "center",
    gap: {
      xs: 4,
      md: 8,
    },
    m: "auto",
  },
  moviePoster: {
    display: {
      xs: "none",
      md: "block",
    },
    width: 280,
    minWidth: 280,
    height: "auto",
    aspectRatio: "2/3",
    objectFit: "contain",
    borderRadius: 8,
  },
  movieContentWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    paddingBlock: {
      md: 4,
    },
  },
  movieTitle: {
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },
  },
  carouselNavBtn: {
    display: {
      xs: "none",
      lg: "block",
    },
    height: "100%",
    width: "64px",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  carouselNavIcon: {
    width: "32px",
    height: "32px",
  },
}
