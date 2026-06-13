import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../images/logo/resq-logo.png"
import { useState } from "react"

function Navbar() {
  const [nav, setNav] = useState(false)

  const openNav = () => {
    console.log("Clicked")
    setNav((prev) => !prev)
  }
  return (
    <nav>
      {/* desktop */}
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>

        {!nav && (
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        )}

        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link className="products-link" to="/spillkits">
              Spill Kits
            </Link>
          </li>
          <li>
            {" "}
            <Link className="testi-link" to="/testimonial">
              Testimonials
            </Link>
          </li>
        </ul>
        <div className="navbar__button">
          <Link className="navbar__button__contact" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/spillkits">
              Spill Kits
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/testimonial">
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
