import React from "react"

import { LangSwitcher } from "@/entities/LangSwitcher"
import { ThemeSwitcher } from "@/entities/ThemeSwitcher"

import { Container } from "@/shared/components"

export const Header: React.FC = () => {
  return (
    <header className={"py-4"}>
      <Container className={"flex gap-2 items-center justify-end"}>
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </Container>
    </header>
  )
}
