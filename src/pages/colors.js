import React from "react"
import Layout from "../layout"
import Color from "../components/color"

const Colors = () => {
  return (
    <Layout title="Colors">
      <div className="colors">
        <div className="colors__wrapper">
          <p className="colors__title">Primary colors</p>
          <div className="colors__inner-wrapper">
            <Color
              number="1"
              hex="#c5d3c9"
              text="Used as one of the primary colors, used on buttons, hover effects and section backgrounds"
            />
            <Color
              number="2"
              hex="#f7f7f7"
              text="Used as a primary page background color"
            />
            <Color
              number="3"
              hex="#373737"
              text="Used as the primary text color"
            />
            <Color
              number="4"
              hex="#283440"
              text="Used as the primary background-color for headers, footers and menus"
            />
          </div>

          <p className="colors__title">Secondary colors</p>
          <div className="colors__inner-wrapper">
            <Color
              number="5"
              hex="#5d83ff"
              text="This color is used to underline and seperate between elements on the page"
            />
            <Color
              number="6"
              hex="#f2b036"
              text="This color can be used to highlight an area or a section, use sparingly."
            />
            <Color
              number="7"
              hex="#e6e6e6"
              text="This color is mainly used to display disabled or non important elements"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Colors
