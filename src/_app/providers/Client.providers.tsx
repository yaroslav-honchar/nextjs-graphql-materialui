"use client"

import { ThemeProvider } from "next-themes"
import React, { type PropsWithChildren } from "react"
import { client } from "@/_app/graphql/gql-client"
import { useMounted } from "@/shared/hooks"
import { ApolloProvider } from "@apollo/client"

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const isMounted = useMounted()

  if (!isMounted) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
    </ApolloProvider>
  )
}
