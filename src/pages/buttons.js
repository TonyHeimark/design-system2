import React from 'react'
import Layout from '../layout'

const Buttons = () => {
  return (
    <Layout title="Buttons">
      <div className="buttons">
        <div className="buttons__wrapper">
          <div className="buttons__example-container">
            <p className="buttons__example-title">Standard Button</p>

            <button className="buttons__button buttons__button--green">
              Click Me!
            </button>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <pre className="buttons__code">
                &lt;button className="buttons__button buttons__button--green"
                &gt; Click Me! &lt;/button&gt;
              </pre>
            </div>
          </div>
          <div className="buttons__example-container">
            <p className="buttons__example-title">Standard Link</p>

            <a href="#" className="buttons__button buttons__button--green">
              Click Me!
            </a>
            <div className="buttons__description-container">
              <div className="buttons__description">
                <p className="buttons__description-title">How to use</p>
                <p className="buttons__description-body">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <pre className="buttons__code">
                &lt;a href="" className="buttons__link buttons__link--green"
                &gt; Click Me! &lt;/a&gt;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Buttons
