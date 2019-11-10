import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import { Helmet } from "react-helmet"

import "./styles/layout.scss"

const Layout = props => (
  <>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
)

export default Layout
