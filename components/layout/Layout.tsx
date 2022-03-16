import React, { Component } from 'react'
import { Sidebar } from '../sidebar/Sidebar'

type Props = {
  children: React.ReactNode
}

export function Layout({ ...pageProps }: Props) {
  return (
    <>
      <Sidebar />
      {/* <Component {...pageProps} /> */}
    </>
  )
}