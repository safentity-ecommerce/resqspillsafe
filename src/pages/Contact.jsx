import Footer from "../components/Footer"
import BookKit from "../components/BookKit"
import HeroPages from "../components/HeroPages"
import "../components/Contact.css"

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                Driven by quality and innovation, we create spill kits designed
                to handle any challenge, giving you reliable protection that
                meets your needs and exceeds expectations.
              </p>
              <div>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:7827258487">&nbsp; 7827258487,</a>
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:prateek@safentity.in">
                  &nbsp; prateek@safentity.in
                </a>
              </div>

              {/* <div>
                <h5>Safentity</h5>
              </div> */}
              <div>
                <h5>Shop</h5>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <a href="https://maps.app.goo.gl/Yvu1Wvd3uWFyUGD87?g_st=aw">
                  &nbsp; 870-A/1, Raja Garden, Old Faridabad, Faridabad,
                  <br /> HR-121002
                </a>
              </div>
              {/* <div>
                <span>Register Office</span>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <a href="http://maps.google.com/?q=11/94 Geeta Colony Near Kanchan Studio Delhi-110031">
                  &nbsp; 11/94, Geeta Colony, <br /> New Delhi - 110031
                </a>
              </div> */}
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "John Smith"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  )
}

export default Contact
