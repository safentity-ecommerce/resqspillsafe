import "../components/SpillKits.css"
import Footer from "./Footer"
import BookKit from "../components/BookKit"
import HeroPages from "./HeroPages"
import { Link } from "react-router-dom"
import ChemicalKit from "../images/spillkit/chemical.png"
import OilKit from "../images/spillkit/oil.png"
import UniversalKit from "../images/spillkit/universal.png"

function SpillKits() {
  return (
    <>
      <section className="spillkit-page">
        <HeroPages name="Spill Kits" />
        <div className="product-section">
          <div className="container">
            <div className="product-content">
              <div className="product-content__title">
                <h4>Spill Kit Essentials</h4>
                <h2>Effective Solutions for Controlling and Cleaning Spills</h2>
              </div>
              <div className="product-grid">
                <Link onClick={() => window.scrollTo(0, 0)} to="/spillkits/oil">
                  <div className="pro undefined">
                    <div className="pro__img">
                      <img src={OilKit} alt="" />
                    </div>
                    <div className="pro__text">
                      <h3>oil spill kits 🫙 </h3>
                      <p>
                        An oil spill kit, a guardian of our ecosystems, equips
                        us to combat environmental disasters, absorbing and
                        containing the black tide, restoring nature's balance.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/spillkits/chemical"
                >
                  <div className="pro reversed-pro">
                    <div className="pro__img">
                      <img src={ChemicalKit} alt="" />
                    </div>
                    <div className="pro__text">
                      <h3>chemical spill kits 🫙</h3>
                      <p>
                        A chemical spill kit, a shield against hazardous spills,
                        empowers us to swiftly neutralize and safely handle
                        chemical accidents, protecting lives and preserving our
                        environment.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/spillkits/universal"
                >
                  <div className="pro undefined">
                    <div className="pro__img">
                      <img src={UniversalKit} alt="" />
                    </div>
                    <div className="pro__text">
                      <h3>universal spill kits 🫙</h3>
                      <p>
                        From oil to chemicals, a universal spill kit, your
                        all-in-one guardian against environmental disasters
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  )
}

export default SpillKits
