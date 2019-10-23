import React from "react"
import Layout from "../layout"

const Forms = () => {
  return (
    <Layout title="Forms">
      <div className="forms">
        <div className="forms__wrapper">
          <div className="forms__example">
            <p className="forms__title">basic input field</p>
            <input
              className="forms__input"
              aria-label="Name"
              placeholder="Name"
              type="text"
              name="name"
            />
            <div className="forms__description-container">
              <div className="forms__description">
                <p className="forms__description-title">How to use</p>
                <p className="forms__description-body">
                  This is used as all input fields, make sure to use aria-label
                  for screen-readers.
                </p>
              </div>
              <pre className="forms__code">
                &lt;input className="forms__input" aria-label="Name"
                placeholder="Name" type="text" name="name" /&gt;
              </pre>
            </div>
          </div>

          <div className="forms__example">
            <p className="forms__title">Basic textarea field</p>
            <textarea
              className="forms__textarea"
              aria-label="Message"
              placeholder="Message"
              name="message"
            />
            <div className="forms__description-container">
              <div className="forms__description">
                <p className="forms__description-title">How to use</p>
                <p className="forms__description-body">
                  This is used as all textareas, make sure to use aria-label for
                  screen-readers.
                </p>
              </div>
              <pre className="forms__code">
                &lt;textarea className="forms__textarea" aria-label="Message"
                placeholder="Message" name="message" /&gt;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Forms
