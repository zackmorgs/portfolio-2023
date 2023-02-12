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
          <div className="bg">
            <div className="wave" id="wave-1"></div>
            <div className="wave" id="wave-2"></div>
            <div className="wave" id="wave-3"></div>
            <div className="wave" id="wave-4"></div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  )
}