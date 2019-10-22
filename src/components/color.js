import React from "react"

const Color = props => {
  return (
    <div className="colors__color-container">
      <span>{props.hex}</span>
      <div className={`colors__color colors__color--bg${props.number}`}></div>
      <div className="colors__color-description">
        <p className="colors__color-description-title">How to use</p>
        <p className="colors__color-description-body">{props.text}</p>
      </div>
    </div>
  )
}

export default Color
