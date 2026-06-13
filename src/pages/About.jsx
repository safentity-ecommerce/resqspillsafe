import HeroPages from "../components/HeroPages"
import AboutMain from "../images/about/about-main.jpg"
import Icon1 from "../images/about/icon1.png"
import Icon2 from "../images/about/icon2.png"
import Icon3 from "../images/about/icon3.png"
import "../components/About.css"
import SelectKit from "../components/SelectKit"
import BookKit from "../components/BookKit"
import Footer from "../components/Footer"

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="boy-cleaning"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You're safe with us from start to spill</h2>
              <p>
                At RESQ, we prioritize your safety and peace of mind. Our spill
                kits are crafted with high-quality materials and designed to
                provide reliable protection against spills of all types. From
                the moment you choose us, we're committed to providing you with
                exceptional service and support, ensuring that you're safe from
                start to spill. Trust us to be your partner in spill prevention
                and management.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Icon1} alt="car-icon" />
                  <span>
                    <h4>3</h4>
                    <p>Spill Kit Types</p>
                  </span>
                </div>

                <div className="about-main__text__icons__box">
                  <img src={Icon3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>16</h4>
                    <p>Spill Kit Items</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Icon2} alt="car-icon" />
                  <span>
                    <h4>20+</h4>
                    <p>Spill Kit Variations</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SelectKit />
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  )
}

export default About
