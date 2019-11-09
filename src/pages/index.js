import React, { useState } from "react"
import Layout from "../layout"
import livingRoom from "../assets/images/interior-design-of-a-house-1571460.jpg"
import sook from "../assets/images/søk_selg1.svg"
import tjen from "../assets/images/hva_tjener_du.svg"
import tilgang from "../assets/images/faa_tilgang.svg"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Layout title="Home">
      <div className="home-page">
        {isModalOpen ? (
          <div className="modal">
            <div className="modal__background" onClick={handleModal}></div>
            <Zoom clear duration={300}>
              <div className="modal__wrapper">
                <h2>HEI</h2>
              </div>
            </Zoom>
          </div>
        ) : null}
        <div className="home-page__wrapper">
          <div className="home-page__top-wrapper">
            <div className=" home-page__text-wrapper home-page__text-wrapper--left">
              <Fade left>
                <div className="home-page__text-background home-page__text-background--left home-page__text-background--top">
                  <h1 className="home-page__section-title">
                    Vurderer du å selge din bolig?
                  </h1>
                  <p className="home-page__text">
                    Vi anvender kunstig intelligens til å finne meglerne som
                    sikrer deg høyeste markedspris for din bolig. Hvis du vil
                    vite hva din eiendom er verdt og/eller finne de beste
                    eiendomsmeglerne, kan du søke nedenfor.
                  </p>
                </div>
              </Fade>
              <input
                type="text"
                aria-label="adresse"
                className="home-page__input"
                placeholder="Adresse"
              />
              <button
                className="home-page__cta-btn home-page__cta-btn--top"
                onClick={handleModal}
              >
                Søk
              </button>
            </div>
            <div className="home-page__img-wrapper home-page__img-wrapper--right">
              <img
                className="home-page__top-img"
                src={livingRoom}
                alt="living room"
              />
            </div>
          </div>
          <h2 className="home-page__section-title home-page__section-title--blue">
            Hvordan fungerer boligselgertjenesten?
          </h2>
          <div className="home-page__section-wrapper home-page__section-wrapper--left">
            <div className=" home-page__text-wrapper home-page__text-wrapper--right">
              <Fade right delay={500}>
                <div className="home-page__text-background home-page__text-background--right">
                  <h3 className="home-page__section-title">Søk</h3>
                  <p className="home-page__text">
                    Du søker på din adresse og vår modell lager et prisestimat
                    på din bolig og vurderer hva hver enkel eiendomsmegler, som
                    opererer i ditt område, vil kunne selge din bolig for. Vi
                    bruker flere hundrede variabler samt salgshistorikken til
                    eiendomsmeglerne som grunnlag for vår intelligente løsning.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="home-page__img-wrapper home-page__img-wrapper--left">
              <img
                className="home-page__top-img"
                src={sook}
                alt="living room"
              />
            </div>
          </div>
          <div className="home-page__section-wrapper home-page__section-wrapper--right">
            <div className=" home-page__text-wrapper home-page__text-wrapper--left">
              <Fade left delay={500}>
                <div className="home-page__text-background home-page__text-background--left">
                  <h3 className="home-page__section-title">Hva tjener du?</h3>
                  <p className="home-page__text">
                    Du får et gratis prisestimat og du blir opplyst om
                    forskjellen i forventet salgspris om du bruker en
                    høytpresterende megler sammenlignet med en lavtpresterende
                    megler; altså hvor mye du potensielt sett kan spare på
                    riktig meglervalg for nettopp din bolig.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="home-page__img-wrapper home-page__img-wrapper--right">
              <img
                className="home-page__top-img"
                src={tjen}
                alt="living room"
              />
            </div>
          </div>
          <div className="home-page__section-wrapper home-page__section-wrapper--left">
            <div className=" home-page__text-wrapper home-page__text-wrapper--right">
              <Fade right delay={500}>
                <div className="home-page__text-background home-page__text-background--right">
                  <h3 className="home-page__section-title">Få tilgang</h3>
                  <p className="home-page__text">
                    Deretter får du tilgang til listen over de 5 beste meglerne
                    slik at du vet hvem som, statistisk sett, vil kunne selge
                    din bolig til høyest pris. Du får også tilgang til annen
                    viktig innsikt om ditt boligsalg og meglernes historikk
                  </p>
                </div>
              </Fade>
            </div>
            <div className="home-page__img-wrapper home-page__img-wrapper--left">
              <img
                className="home-page__top-img"
                src={tilgang}
                alt="living room"
              />
            </div>
          </div>
          <div className="home-page__section-wrapper home-page__section-wrapper--newsletter">
            <div className=" home-page__text-wrapper home-page__text-wrapper--left">
              <div className="home-page__text-background home-page__text-background--left">
                <h3 className="home-page__section-title">Nyhetsbrev</h3>
                <p className="home-page__text">
                  Meld deg på vårt nyhetsbrev og bli informert når vi lanserer
                  nye tjenester eller lanserer våre tjenester i nye områder.
                </p>
              </div>
            </div>
            <div className="home-page__newsletter-signup">
              <input
                type="email"
                aria-label="email"
                className="home-page__newsletter-input"
                placeholder="Email"
              />
              <button className="home-page__newsletter-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
