import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./HomePage.props"

export async function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return <>Home</>
}
