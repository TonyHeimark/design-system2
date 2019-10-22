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
            text="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,"
          />
          <Type
            elementType="h2"
            element={<h2>Lorem ipsum dolor sit amet</h2>}
            text="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,"
          />
          <Type
            elementType="h3"
            element={<h3>Lorem ipsum dolor sit amet</h3>}
            text="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,"
          />
          <Type
            elementType="paragraph"
            element={
              <p>
                Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            }
            text="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Typography
