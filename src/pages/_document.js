import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import React, { Component, StrictMode } from 'react'



export default function Document() {
  return (
    <StrictMode>
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  )
}