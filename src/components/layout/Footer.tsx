import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-surface-light py-[10rem]">
      <div className="container">
        <div className="grid grid-cols-[27fr_21fr_21fr_21fr] gap-[6rem] text-text-primary max-[1100px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:text-center">
          <ul className="list-none max-[650px]:text-center">
            <li className="text-[2.4rem] mb-[1.5rem] font-bold uppercase">
              resq spill safe{" "}
              <span className="text-primary text-[4rem]">.</span>
            </li>
            <li className="text-[1.6rem] text-text-secondary leading-[1.7] mb-[3rem]">
              RESQ Spill Safe provides reliable, easy-to-use protection against
              leaks and spills, keeping your space safe and compliant.
            </li>
            <li className="flex text-[18px] gap-[1.75rem] mb-[3rem] max-[540px]:justify-center">
              <Link
                href="/"
                className="text-text-primary transition-all duration-300 hover:text-white hover:bg-primary"
              >
                <i className="fa-brands fa-facebook p-[1rem] bg-surface-muted rounded-[9999px] transition-all duration-300 hover:text-white hover:bg-primary"></i>
              </Link>
              <a
                href="https://www.instagram.com/resqspillsafe/"
                className="text-text-primary transition-all duration-300 hover:text-white hover:bg-primary"
              >
                <i className="fa-brands fa-instagram p-[1rem] bg-surface-muted rounded-[9999px] transition-all duration-300 hover:text-white hover:bg-primary"></i>
              </a>
              <a
                href="https://wa.me/+917827258487"
                className="text-text-primary transition-all duration-300 hover:text-white hover:bg-primary"
              >
                <i className="fa-brands fa-whatsapp p-[1rem] bg-surface-muted rounded-[9999px] transition-all duration-300 hover:text-white hover:bg-primary"></i>
              </a>
            </li>
            <li>
              <p className="font-medium text-[16px] text-text-secondary">
                Privacy Policy | &copy; {new Date().getFullYear()} Safentity{" "}
                <br />
                Developed by{" "}
                <a
                  href="https://www.prateek.wtf/"
                  className="text-text-primary transition-all duration-200 hover:text-primary"
                >
                  Prateek
                </a>
              </p>
            </li>
          </ul>

          <ul className="list-none max-[650px]:text-center">
            <li className="text-[2.4rem] font-bold font-poppins mb-[1rem]">
              Company
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <Link
                href="/"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <Link
                href="/about"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                About
              </Link>
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <Link
                href="/spillkits"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                Spill Kits
              </Link>
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <Link
                href="/testimonial"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                Testimonials
              </Link>
            </li>
          </ul>

          <ul className="list-none max-[650px]:text-center">
            <li className="text-[2.4rem] font-bold font-poppins mb-[1rem]">
              Working Hours
            </li>
            <li className="text-[1.6rem] mb-[1rem]">Mon - Sun: Anytime</li>
          </ul>

          <ul className="list-none max-[650px]:text-center">
            <li className="text-[2.4rem] font-bold font-poppins mb-[1rem]">
              Connect With Us
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <i className="fa-solid fa-phone" />{" "}
              <a
                href="tel:7827258487"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                7827258487
              </a>
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <i className="fa-solid fa-envelope" />{" "}
              <a
                href="mailto:prateek@safentity.in"
                className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
              >
                prateek@safentity.in
              </a>
            </li>
            <li className="mt-[1rem]">
              <ul className="list-none">
                <li className="text-[1.8rem] font-bold underline mb-[1rem]">
                  Shop
                </li>
                <li className="text-[1.6rem] mb-[1rem] leading-[1.6]">
                  <i className="fa-solid fa-location-dot" />{" "}
                  <a
                    href="https://maps.app.goo.gl/Yvu1Wvd3uWFyUGD87?g_st=aw"
                    className="text-text-primary no-underline transition-all duration-200 hover:text-primary"
                  >
                    870-A/1, Raja Garden, Old Faridabad, Faridabad,
                    <br /> HR-121002
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
