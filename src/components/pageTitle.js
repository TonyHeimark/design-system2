import React from 'react'

const PageTitle = props => {
  return (
    <div className="page-top">
      <h1 className="page-top__title">{props.title}</h1>
    </div>
  )
}

export default PageTitle
