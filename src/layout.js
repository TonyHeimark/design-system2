import React from "react"
import Header from "./components/header"
import PageTitle from "./components/pageTitle"

import "./styles/layout.scss"

const NotFoundPage = props => (
  <>
    <Header></Header>
    <main>
      <PageTitle title={props.title}></PageTitle>
      {props.children}
    </main>
  </>
)

export default NotFoundPage
