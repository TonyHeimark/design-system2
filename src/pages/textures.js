import React from 'react'
import Layout from '../layout'

import bg1 from '../assets/images/funky-lines.png'

const Textures = () => {
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
            <div className="textures__texture-description">
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="textures__texture-container">
            <div
              className="textures__texture"
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            ></div>
            <div className="textures__texture-description">
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="textures__texture-container">
            <div
              className="textures__texture"
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            ></div>
            <div className="textures__texture-description">
              <p className="textures__texture-description-title">How to use</p>
              <p className="textures__texture-description-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Textures
