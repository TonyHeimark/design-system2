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
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
            <Color
              number="2"
              hex="#f7f7f7"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
            <Color
              number="3"
              hex="#373737"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
            <Color
              number="4"
              hex="#283440"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>

          <p className="colors__title">Secondary colors</p>
          <div className="colors__inner-wrapper">
            <Color
              number="5"
              hex="#5d83ff"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
            <Color
              number="6"
              hex="#f2b036"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
            <Color
              number="7"
              hex="#e6e6e6"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Colors
