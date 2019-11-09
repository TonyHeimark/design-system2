import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../assets/images/logo-white.svg"
import logoFull from "../assets/images/HomeFair_logo.png"
import hamburger from "../assets/images/iconfinder-icon.svg"

const menuItems = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "About Us",
    url: "#",
  },
  {
    label: "Contact Us",
    url: "#",
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
            src={hamburger}
            alt="hamburger menu button"
            onClick={handleIsNavOpen}
          />
          {!isNavOpen ? (
            <nav>
              <ul
                className={`header__navigation ${
                  !isNavOpen
                    ? "header__navigation--hidden"
                    : "header__navigation--visible"
                }`}
              >
                {menuItems.map(item => (
                  <Link
                    to={item.url}
                    className="header__link"
                    activeClassName="header__link--active"
                    key={item.label}
                  >
                    <li className="header__label">{item.label}</li>
                  </Link>
                ))}
              </ul>
            </nav>
          ) : null}

          <img className="header__logo" src={logoFull} alt="logo"></img>
        </div>
      </header>
      <div
        className={
          isNavOpen
            ? "navigation navigation--open"
            : "navigation navigation--closed"
        }
      >
        <nav>
          <button className="navigation__button" onClick={handleIsNavOpen}>
            X
          </button>

          <div className="navigation__logo-container">
            <img className="navigation__logo" src={logo} alt="logo"></img>
          </div>
          <ul className="navigation__list">
            {menuItems.map(item => (
              <Link
                to={item.url}
                className="navigation__link"
                activeClassName="navigation__link--active"
                key={item.label}
              >
                <li className="navigation__label">{item.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
