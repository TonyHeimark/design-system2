import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import PageTitle from './components/pageTitle'

import './styles/layout.scss'

const NotFoundPage = props => (
  <>
    <Header></Header>
    <main>
      <PageTitle title={props.title}></PageTitle>
      {props.children}
    </main>
    <Footer></Footer>
  </>
)

export default NotFoundPage
