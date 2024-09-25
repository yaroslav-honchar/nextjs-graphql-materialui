import React from "react"
import { ClientProviders, ServerProviders } from "@/_app/providers"
import { Footer } from "@/features/Footer"
import { Header } from "@/features/Header"
import type { ILayoutProps } from "./Layout.props"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <ClientProviders>
        <div className={"min-h-screen w-full flex flex-col"}>
          <Header />
          <main className={"flex-grow flex flex-col"}>{children}</main>
          <Footer />
        </div>
      </ClientProviders>
    </ServerProviders>
  )
}
