import React from "react"
import Layout from "../layout"

const Buttons = () => {
  return (
    <Layout title="Buttons">
      <div className="buttons">
        <div className="buttons__wrapper">
          <div className="buttons__example-container">
            <p className="buttons__example-title">Standard CTA Button</p>

            <button className="buttons__button buttons__button--green">
              Click Me!
            </button>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Used for call to actions where a button is handeling click
                  events.
                </p>
              </div>
              <pre className="buttons__code">
                &lt;button className="buttons__button buttons__button--green"
                &gt; Click Me! &lt;/button&gt;
              </pre>
            </div>
          </div>
          <div className="buttons__example-container">
            <p className="buttons__example-title">Standard CTA Link</p>

            <a href="#" className="buttons__button buttons__button--green">
              Click Me!
            </a>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Used as a call to action link to special offers or other
                  pages.
                </p>
              </div>
              <pre className="buttons__code">
                &lt;a href="" className="buttons__button buttons__button--green"
                &gt; Click Me! &lt;/a&gt;
              </pre>
            </div>
          </div>
          <div className="buttons__example-container">
            <p className="buttons__example-title">Small Standard Button</p>

            <button className="buttons__button buttons__button--green buttons__button--small">
              Click Me!
            </button>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Used as a general button throughout the site that handles some
                  form of event and does something.
                </p>
              </div>
              <pre className="buttons__code">
                &lt;button className="buttons__button buttons__button--green
                buttons__button--small" &gt; Click Me! &lt;/button&gt;
              </pre>
            </div>
          </div>
          <div className="buttons__example-container">
            <p className="buttons__example-title">Small Standard Link</p>

            <a
              href="#"
              className="buttons__button buttons__button--green buttons__button--small"
            >
              Click Me!
            </a>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Used as a general link to other pages and guide the user
                  throughout the page.
                </p>
              </div>
              <pre className="buttons__code">
                &lt;a href="" className="buttons__button buttons__button--green
                buttons__button--small" &gt; Click Me! &lt;/a&gt;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Buttons
