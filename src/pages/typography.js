import React from "react"
import Layout from "../layout"
import Type from "../components/type"

const Typography = () => {
  return (
    <Layout title="Typography">
      <div className="typography">
        <div className="typography__wrapper">
          <Type
            elementType="h1"
            element={<h1>Lorem ipsum dolor sit amet</h1>}
            text="The H1 tag is only used as the primary headline of a page."
          />
          <Type
            elementType="h2"
            element={<h2>Lorem ipsum dolor sit amet</h2>}
            text="The H2 tag is used as a sub-heading for sections within a page."
          />
          <Type
            elementType="h3"
            element={<h3>Lorem ipsum dolor sit amet</h3>}
            text="the H3 tag is used for sub-sub-headings, as headings for elements or sections within a sub-section."
          />
          <Type
            elementType="paragraph"
            element={
              <p>
                Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            }
            text="Paragraphs are used for all text-fields that displays a full sentence or more."
          />
        </div>
      </div>
    </Layout>
  )
}

export default Typography
