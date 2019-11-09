import React from "react"
import Header from "./components/header"

import "./styles/layout.scss"

const Layout = props => (
  <>
    <Header></Header>
    <main>{props.children}</main>
  </>
)

export default Layout
