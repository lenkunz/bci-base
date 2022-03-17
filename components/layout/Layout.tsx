import React, { Component } from 'react'
import { Sidebar } from '../sidebar/Sidebar'

type Props = {
  children: React.ReactNode
}

export function Layout({ children, ...pageProps }: Props) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}