import React, { useState } from "react"
import kjokken from "../assets/images/Kjøkken.svg"
import garasj from "../assets/images/Garasj.svg"
import bad from "../assets/images/Bad.svg"
import balkong from "../assets/images/Balkong.svg"

const ModalForm = () => {
  const [parkingChecked, setParkingChecked] = useState(false)
  const [balkongChecked, setBalkongChecked] = useState(false)
  const [badChecked, setBadChecked] = useState(false)
  const [kjokkenChecked, setKjokkenChecked] = useState(false)

  const handleCheckbox = e => {
    console.log(e.target.id)
    if (e.target.id === "parking") {
      setParkingChecked(!parkingChecked)
    } else if (e.target.id === "balkong") {
      setBalkongChecked(!balkongChecked)
    } else if (e.target.id === "bad") {
      setBadChecked(!badChecked)
    } else if (e.target.id === "kjokken") {
      setKjokkenChecked(!kjokkenChecked)
    } else {
      return
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
        placeholder="94"
        aria-label="primærrom"
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
          className={`modalForm__checkbox-item ${
            parkingChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
          onClick={handleCheckbox}
        >
          <label for="parking" className="modalForm__item">
            <span className="modalForm__item-name">Parkering/garasj</span>
            <img src={garasj} alt="kjøkken ikon" />
          </label>
          <input
            checked={parkingChecked}
            type="checkbox"
            id="parking"
            name="parking"
            value="Parkering/garasj"
          />
        </div>

        <div
          className={`modalForm__checkbox-item ${
            balkongChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
          onClick={handleCheckbox}
        >
          <label for="balkong" className="modalForm__item">
            <span className="modalForm__item-name">Balkong/terasse</span>
            <img src={balkong} alt="kjøkken ikon" />
          </label>

          <input
            checked={balkongChecked}
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
          className={`modalForm__checkbox-item ${
            badChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
          onClick={handleCheckbox}
        >
          <label for="bad" className="modalForm__item">
            <span className="modalForm__item-name">Bad/toilett</span>
            <img src={bad} alt="kjøkken ikon" />
          </label>
          <input
            checked={badChecked}
            className="modalForm__checkbox"
            type="checkbox"
            id="bad"
            name="parking"
            value="Parkering/garasj"
          />
        </div>

        <div
          className={`modalForm__checkbox-item ${
            kjokkenChecked ? "modalForm__checkbox-item--checked" : ""
          }`}
          onClick={handleCheckbox}
        >
          <label for="kjokken" className="modalForm__item">
            <span className="modalForm__item-name">kjøkken</span>
            <img src={kjokken} alt="kjøkken ikon" />
          </label>

          <input
            checked={kjokkenChecked}
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
