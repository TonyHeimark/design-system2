import React, { useState, useEffect } from "react"
import kjokken from "../assets/images/Kjøkken.svg"
import garasj from "../assets/images/Garasj.svg"
import bad from "../assets/images/Bad.svg"
import balkong from "../assets/images/Balkong.svg"

const ModalForm = () => {
  const [houseSize, setHouseSize] = useState(localStorage.getItem("houseSize"))
  const [parkingChecked, setParkingChecked] = useState(
    JSON.parse(localStorage.getItem("parkingChecked"))
  )
  const [balkongChecked, setBalkongChecked] = useState(
    JSON.parse(localStorage.getItem("balkongChecked"))
  )
  const [badChecked, setBadChecked] = useState(
    JSON.parse(localStorage.getItem("badChecked"))
  )
  const [kjokkenChecked, setKjokkenChecked] = useState(
    JSON.parse(localStorage.getItem("kjokkenChecked"))
  )

  useEffect(() => {
    localStorage.setItem("parkingChecked", parkingChecked)
    localStorage.setItem("balkongChecked", balkongChecked)
    localStorage.setItem("badChecked", badChecked)
    localStorage.setItem("kjokkenChecked", kjokkenChecked)
    localStorage.setItem("houseSize", houseSize)
  }, [kjokkenChecked, balkongChecked, badChecked, parkingChecked, houseSize])

  const handleHouseSize = e => {
    setHouseSize(e.target.value)
  }

  const handleCheckbox = (e, childId) => {
    if (e.target.id === "parking" || childId === "parking") {
      setParkingChecked(!parkingChecked)
    } else if (e.target.id === "balkong" || childId === "balkong") {
      setBalkongChecked(!balkongChecked)
    } else if (e.target.id === "bad" || childId === "bad") {
      setBadChecked(!badChecked)
    } else if (e.target.id === "kjokken" || childId === "kjokken") {
      setKjokkenChecked(!kjokkenChecked)
    } else {
      return
    }
  }

  const handleKeyPress = e => {
    let keycode = e.keyCode ? e.keyCode : e.which
    if (keycode === 13) {
      handleCheckbox(e, e.target.children[1].id)
    }
  }
  return (
    <form className="modalForm__form">
      <div className="modalForm__text-box">
        <span className="modalForm__sub-heading">Primærrom (P rom)</span>
        <p className="modalForm__text">
          Primærrom gir et bedre estimat enn bruksareal og er derfor ønskelig å
          anvende i prediksjonen.
        </p>
      </div>
      <input
        className="modalForm__input"
        type="text"
        aria-label="primærrom"
        value={houseSize ? houseSize : ""}
        onChange={handleHouseSize}
      />
      <div className="modalForm__text-box">
        <span className="modalForm__sub-heading">Har du følgende</span>
        <p className="modalForm__text">
          Avhengig av datatilgjengelighet, vil informasjonen muligvis bli brukt
          til å gi deg et mer treffsikkert estimat.
        </p>
      </div>
      <div className="modalForm__checkbox-wrapper">
        <div
          onKeyUp={handleKeyPress}
          aria-label="checkbox for kjøkken"
          tabIndex="0"
          className={`modalForm__checkbox-item ${
            parkingChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
        >
          <label htmlFor="parking" className="modalForm__item">
            <span className="modalForm__item-name">Parkering/garasj</span>
            <img src={garasj} alt="kjøkken ikon" />
          </label>
          <input
            onChange={handleCheckbox}
            tabIndex="-1"
            type="checkbox"
            id="parking"
            name="parking"
            value="Parkering/garasj"
          />
        </div>

        <div
          aria-label="checkbox for kjøkken"
          tabIndex="0"
          onKeyUp={handleKeyPress}
          className={`modalForm__checkbox-item ${
            balkongChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
        >
          <label htmlFor="balkong" className="modalForm__item">
            <span className="modalForm__item-name">Balkong/terasse</span>
            <img src={balkong} alt="kjøkken ikon" />
          </label>

          <input
            onChange={handleCheckbox}
            tabIndex="-1"
            type="checkbox"
            id="balkong"
            name="balkong"
            value="Balkong/terasse"
          />
        </div>
      </div>
      <div className="modalForm__text-box">
        <span className="modalForm__sub-heading">
          Har du oppusset følgende siden du kjøpte din bolig?
        </span>
        <p className="modalForm__text">
          Effekten av oppussing er vanligvis merkbar, men avhenger blant annet
          av boligtype og lokalitet. Velg nedenfor for et mer treffsikkert
          estimat
        </p>
      </div>
      <div className="modalForm__checkbox-wrapper">
        <div
          aria-label="checkbox for kjøkken"
          tabIndex="0"
          onKeyUp={handleKeyPress}
          className={`modalForm__checkbox-item ${
            badChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
        >
          <label htmlFor="bad" className="modalForm__item">
            <span className="modalForm__item-name">Bad/toilett</span>
            <img src={bad} alt="kjøkken ikon" />
          </label>
          <input
            onChange={handleCheckbox}
            tabIndex="-1"
            type="checkbox"
            id="bad"
            name="parking"
            value="Parkering/garasj"
          />
        </div>

        <div
          aria-label="checkbox for kjøkken"
          tabIndex="0"
          onKeyUp={handleKeyPress}
          className={`modalForm__checkbox-item ${
            kjokkenChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
        >
          <label htmlFor="kjokken" className="modalForm__item">
            <span className="modalForm__item-name">kjøkken</span>
            <img src={kjokken} alt="kjøkken ikon" />
          </label>

          <input
            onChange={handleCheckbox}
            tabIndex="-1"
            type="checkbox"
            id="kjokken"
            name="balkong"
            value="Balkong/terasse"
          />
        </div>
      </div>
    </form>
  )
}

export default ModalForm
