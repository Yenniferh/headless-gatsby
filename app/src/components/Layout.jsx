import * as React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>Footer</footer>
    </>
  )
}

export default Layout
