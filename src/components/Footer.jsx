import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                resq spill safe <span>.</span>
              </li>
              <li>
                RESQ Spill Safe provides reliable, easy-to-use protection
                against leaks and spills, keeping your space safe and compliant.
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/resqspillsafe/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/+917827258487" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <p>
                  Privacy Policy | © {new Date().getFullYear()} Safentity <br />{" "}
                  Developed by {""}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.prateek.wtf/"
                  >
                    Prateek
                  </a>
                </p>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/spillkits">
                  Spill Kits
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/testimonials">
                  Testimonials
                </Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun: Anytime</li>

              {/* <li>Mon - Sat: 10:00AM - 6:00PM</li> */}
              {/* <li>Sun: Closed</li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Connect With Us</li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:7827258487" target="_blank">
                  &nbsp; 7827258487
                </a>

                {/* <a href="tel:8588976857" target="_blank">
                  &nbsp; 8588976857
                </a> */}
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a
                  href="mailto: 
                prateek@safentity.in"
                  target="_blank"
                >
                  &nbsp; prateek@safentity.in
                </a>
              </li>
              <li>
                <ul className="footer-content__2__company">
                  {/* <li>safentity</li> */}
                  <li>
                    <span>Shop</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a
                      href="https://maps.app.goo.gl/Yvu1Wvd3uWFyUGD87?g_st=aw"
                      target="_blank"
                    >
                      &nbsp; 870-A/1, Raja Garden, Old Faridabad, Faridabad,
                      <br /> HR-121002
                    </a>
                  </li>
                  {/* <li>
                    <span>Register Office</span>
                  </li> */}
                  {/* <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a
                      href="http://maps.google.com/?q=11/94 Geeta Colony Near Kanchan Studio Delhi-110031"
                      target="_blank"
                    >
                      &nbsp; 11/94, Geeta Colony, <br /> New Delhi - 110031
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
