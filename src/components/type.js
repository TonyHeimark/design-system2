import React from "react"

const Type = props => {
  return (
    <div className="typography__example">
      <p className="typography__title">{props.elementType}</p>
      {props.element}
      <div className="typography__description-container">
        <div className="typography__description">
          <p className="typography__description-title">How to use</p>
          <p className="typography__description-body">{props.text}</p>
        </div>
        <pre className="typography__code">
          &lt;{props.elementType}&gt;Lorem ipsum dolor sit amet&lt;/
          {props.elementType}&gt;
        </pre>
      </div>
    </div>
  )
}

export default Type
