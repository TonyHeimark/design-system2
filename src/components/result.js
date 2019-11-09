import React from "react"

const Result = props => {
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  const homeWorth = Math.random() * 10000000
  const homeValue = Math.floor(homeWorth)
  const homeValueDisplay = numberWithCommas(homeValue).split(".")
  const bestSeller = homeValue * 1.02
  const bestSellerDisplay = numberWithCommas(bestSeller).split(".")
  const worstSeller = homeValue * 1.007
  const worstSellerDisplay = numberWithCommas(worstSeller).split(".")
  const earnings = numberWithCommas(bestSeller - worstSeller).split(".")

  return (
    <div className="result">
      <div className="result__adress-wrapper">
        <span className="result__adress">{props.adress}</span>
      </div>
      <div className="result__listing">
        <span className="result__sub-heading">Boligprisestmat</span>
        <span className="result__amount">{homeValueDisplay[0]} kr</span>
        <span className="result__sub-heading">
          Antall meglere vi sammenlignet
        </span>
        <span className="result__amount">27</span>
        <span className="result__sub-heading">
          Salgspris med høytpresterende megler
        </span>
        <span className="result__amount">{bestSellerDisplay[0]} kr</span>
        <span className="result__sub-heading">
          Salgspris med lavtpresterende megler
        </span>
        <span className="result__amount">{worstSellerDisplay[0]} kr</span>
        <div className="result__earnings-wrapper">
          <span className="result__earnings-heading">Potensiell gevinst:</span>
          <span className="result__earnings">{earnings[0]} kr</span>
        </div>
      </div>
    </div>
  )
}

export default Result
