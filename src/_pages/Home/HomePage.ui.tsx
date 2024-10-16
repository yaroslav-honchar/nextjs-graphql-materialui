import { MainHero } from "@/widgets/MainHero/MainHero.ui"
import { Tradings } from "@/widgets/Tradings"
import { unstable_setRequestLocale } from "next-intl/server"
import type { IHomePageProps } from "./HomePage.props"

export async function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <MainHero />
      <Tradings />
    </>
  )
}
