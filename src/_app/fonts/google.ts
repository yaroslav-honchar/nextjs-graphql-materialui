import { Poppins, Urbanist } from "next/font/google"

export const fontPrimary = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
})

export const fontSecondary = Urbanist({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
})
