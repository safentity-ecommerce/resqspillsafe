import "./Hero.css"
import { Link } from "react-router-dom"
import HeroImg from "../images/hero/hero-img.png"
import { useEffect, useState } from "react"

function Hero() {
  const [goUp, setGoUp] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" })
  }

  // const contactBtn = () => {
  //   document
  //     .querySelector("#contact-section")
  //     .scrollIntoView({ behavior: "smooth" })
  //   window.scrollTo(0, 0)
  // }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true)
      } else {
        setGoUp(false)
      }
    }
    window.addEventListener("scroll", onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your spill response now</h4>
              <h1>
                Save <span>big</span> with our spill kits
              </h1>
              <p>
                Best prices, flexible choices, and spill protection you can
                count on, stay ready with our top-notch containment solutions
              </p>
              <div className="hero-content__text__btn">
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  className="hero-content__text__btn__contact"
                  to="/spillkits"
                >
                  Order Now &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroImg}
              alt="spillkit"
              className="hero-content__resq-spill"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  )
}

export default Hero
