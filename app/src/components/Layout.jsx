import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  )
}

export default Layout
