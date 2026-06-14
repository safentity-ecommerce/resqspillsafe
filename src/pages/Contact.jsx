import Footer from "../components/Footer"
import BookKit from "../components/BookKit"
import HeroPages from "../components/HeroPages"
import "../components/Contact.css"
import { useState } from "react"
import { toast, Toaster } from "sonner"

function Contact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      phone,
      email,
      message,
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message)
      }

      toast.success(result.message)

      setName("")
      setPhone("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast.error(error.message)
    }
  }

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
              <form onSubmit={onSubmit}>
                <label>
                  Company Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='E.g: "Amazon Inc"'
                  required
                ></input>

                <label>
                  Mobile No. <b>*</b>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="7827258487"
                  required
                ></input>

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@example.com"
                ></input>

                <label>
                  Tell us your requirement <b>*</b>
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Here.."
                  required
                ></textarea>

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
