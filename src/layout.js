import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"

import "./styles/layout.scss"

const Layout = props => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
)

export default Layout
