import type { RouterLinkProps } from "@/shared/components/RouterLink"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar"

export const routerLinks: Omit<RouterLinkProps, "href">[] = [
  {
    variant: "link",
    color: "primary",
  },
  {
    variant: "link",
    color: "primary",
    startIcon: <PermContactCalendarIcon />,
  },
  {
    variant: "link",
    color: "secondary",
  },
  {
    variant: "link",
    color: "secondary",
    endIcon: <ChevronRightIcon />,
  },
  {
    variant: "link",
    color: "info",
  },
  {
    variant: "link",
    color: "warning",
  },
  {
    variant: "link",
    color: "error",
  },
]
