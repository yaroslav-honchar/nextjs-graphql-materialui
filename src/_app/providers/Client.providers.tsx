"use client"

import React, { type PropsWithChildren } from "react"
import { client } from "@/_app/graphql/gql-client"
import { ApolloProvider } from "@apollo/client"

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
