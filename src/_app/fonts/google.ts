import { Roboto } from "next/font/google"

export const fontPrimary = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})
