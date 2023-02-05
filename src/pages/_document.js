import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import React, { Component, StrictMode } from 'react'

function MainNav() {
  const [navClosed, setNav] = React.useState(true);
  function handleBurgerClick() {
    setNav(!navClosed);
    console.log("test")
  }
  return (
    <nav id="nav-main">
      <div id="nav-brand">
        <Link href="/">
          Z
        </Link>
        <button id="navbar_burger" onClick={handleBurgerClick} className={navClosed ? 'is-closed' : 'is-open'}>
          <span></span> 
          <span></span>
          <span></span>
        </button>
      </div>
      <ul>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
      </ul>
    </nav>
  );

}

export default function Document() {
  return (
    <StrictMode>
      <Html lang="en">
        <Head />
        <body>
          <MainNav/>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  )
}