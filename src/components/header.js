import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../assets/images/eagle.svg"
import hamburger from "../assets/images/iconfinder-icon.svg"

const menuItems = [
  {
    label: "Colors",
    url: "/colors",
  },
  {
    label: "Textures",
    url: "/textures",
  },
  {
    label: "Forms",
    url: "/forms",
  },
  {
    label: "Buttons",
    url: "/buttons",
  },
  {
    label: "Typography",
    url: "/typography",
  },
]

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleIsNavOpen = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
    } else {
      setIsNavOpen(true)
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img
            className="header__button"
            onClick={handleIsNavOpen}
            src={hamburger}
            alt="hamburger menu"
          ></img>
          <img className="header__logo" src={logo} alt="logo"></img>
        </div>
      </header>

      <nav
        className={
          isNavOpen
            ? "navigation navigation--open"
            : "navigation navigation--closed"
        }
      >
        <button className="navigation__button" onClick={handleIsNavOpen}>
          X
        </button>
        <div className="navigation__logo-container">
          <img className="navigation__logo" src={logo} alt="eagle logo"></img>
        </div>
        <ul className="navigation__list">
          <Link
            to="/"
            className="navigation__link"
            activeClassName="navigation__link--active"
            key="/"
          >
            <li className="navigation__label">Home</li>
          </Link>
          <li className="navigation__section-label">Components</li>

          {menuItems.map(item => (
            <Link
              to={item.url}
              className="navigation__link"
              activeClassName="navigation__link--active"
              key={item.url}
            >
              <li className="navigation__label">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
