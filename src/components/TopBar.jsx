import "../components/TopBar.css"

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <ul>
              <li>
                <a href="tel:7827258487">
                  <i className="fa-solid fa-phone"></i> &nbsp; 7827258487
                </a>
              </li>
              <li>
                <a
                  href="mailto: 
                prateek@safentity.in"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; prateek@safentity.in
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-sharp fa-solid fa-clock"></i>
                  &nbsp; Mon - Sun: Anytime
                </a>
              </li>
            </ul>
            <ul className="top-bar__social">
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/resqspillsafe/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+917827258487" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
