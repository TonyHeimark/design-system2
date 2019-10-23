import React, { useState } from "react"
import Layout from "../layout"

import bg1 from "../assets/images/funky-lines.png"
import bg2 from "../assets/images/prism.png"
import bg3 from "../assets/images/concrete_seamless.png"

const Textures = () => {
  const [test, setTest] = useState(null)

  return (
    <Layout title="Textures">
      <div className="textures">
        <div className="textures__wrapper">
          <div className="textures__texture-container">
            <div
              className="textures__texture"
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            ></div>
            <div
              className="textures__texture-description"
              style={
                test === bg2
                  ? {
                      backgroundImage: `url(${test})`,
                      color: "white",
                    }
                  : test
                  ? {
                      backgroundImage: `url(${test})`,
                    }
                  : null
              }
            >
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                This texture can be used to bring attention to certain text
                boxes or information.
              </p>
              <button
                className="textures__test textures__test--green"
                onClick={() => {
                  setTest(bg1)
                }}
              >
                Test it
              </button>
            </div>
          </div>
          <div className="textures__texture-container">
            <div
              className="textures__texture"
              style={{
                backgroundImage: `url(${bg2})`,
              }}
            ></div>
            <div
              className="textures__texture-description"
              style={
                test === bg2
                  ? {
                      backgroundImage: `url(${test})`,
                      color: "white",
                    }
                  : test
                  ? {
                      backgroundImage: `url(${test})`,
                    }
                  : null
              }
            >
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                This texture is used to for element backgrounds or as a section
                background.
              </p>
              <button
                className="textures__test textures__test--green"
                onClick={() => {
                  setTest(bg2)
                }}
              >
                Test it
              </button>
            </div>
          </div>
          <div className="textures__texture-container">
            <div
              className="textures__texture"
              style={{
                backgroundImage: `url(${bg3})`,
              }}
            ></div>
            <div
              className="textures__texture-description"
              style={
                test === bg2
                  ? {
                      backgroundImage: `url(${test})`,
                      color: "white",
                    }
                  : test
                  ? {
                      backgroundImage: `url(${test})`,
                    }
                  : null
              }
            >
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                This texture can be used to give a realistic look to certain
                sections or elements.
              </p>
              <button
                className="textures__test textures__test--green"
                onClick={() => {
                  setTest(bg3)
                }}
              >
                Test it
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Textures
