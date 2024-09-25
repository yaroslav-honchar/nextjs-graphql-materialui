import { useTranslations } from "next-intl"

import React from "react"

import { Container, Section } from "@/shared/components"

export const StarterScreen: React.FC = () => {
  const tStarterScreen = useTranslations("StarterScreen")

  return (
    <Section className={"m-auto"}>
      <Container
        className={"text-center flex flex-col gap-4"}
        size={"lg"}
      >
        <h1 className={"text-4xl"}>{tStarterScreen("title")}</h1>
        <p className={"text-xl"}>{tStarterScreen("description")}</p>
      </Container>
    </Section>
  )
}
