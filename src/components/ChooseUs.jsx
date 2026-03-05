import "./ChooseUs.css"
import MainImg from "../images/chooseUs/chooseus-img.png"
import { Link } from "react-router-dom"
import Icon1 from "../images/chooseUs/icon1.png"
import Icon2 from "../images/chooseUs/icon2.png"
import Icon3 from "../images/chooseUs/icon3.png"

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="spill_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Discover unbeatable value with our spill kit deals.</h2>
                <p>
                  Experience unbeatable deals for top-quality spill kits. We're
                  dedicated to providing the best value for your money, so you
                  can enjoy a superior spill protection experience without
                  overspending. Don't miss out on our offers and save big on
                  your spill kit needs.
                </p>
                <Link onClick={() => window.scrollTo(0, 0)} to="/spillkits">
                  Order Now &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Icon1} alt="premium-img" />
                  <div className="text-container__right__box__text">
                    <h4>Premium Quality</h4>
                    <p>
                      Our spill kits are made with high-quality materials to
                      ensure maximum efficiency and effectiveness.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Icon2} alt="nationwide-img" />
                  <div className="text-container__right__box__text">
                    <h4>Nationwide Availability</h4>
                    <p>
                      We offer nationwide shipping and distribution, making it
                      easy for customers to access our products anywhere in the
                      country.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {"  "}
                  <img src={Icon3} alt="affordable-img" />
                  <div className="text-container__right__box__text">
                    <h4>Affordable Prices</h4>
                    <p>
                      We believe in providing the best value for your money,
                      which is why our spill kits are priced competitively
                      without sacrificing quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChooseUs
