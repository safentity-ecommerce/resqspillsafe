import type { Metadata } from "next"
import HeroPages from "@/components/shared/HeroPages"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact | Resq Spill Safe",
  description: "Get in touch with RESQ Spill Safe for inquiries about our spill kits and services.",
}

export default function ContactPage() {
  return (
    <section className="contact-page">
      <HeroPages name="Contact" />
      <div className="container">
        <div className="grid grid-cols-2 gap-[3rem] mx-auto text-text-primary py-[10rem] px-[2rem] max-[950px]:grid-cols-1 max-[950px]:text-center">
          <div className="flex flex-col gap-[1rem] max-w-[41rem] max-[950px]:mx-auto max-[950px]:mb-[2rem]">
            <h2 className="text-[4.2rem] leading-[1.3] mb-[2rem]">
              Need additional information?
            </h2>
            <p className="text-[1.6rem] font-rubik text-text-secondary leading-[1.6] mb-[2rem]">
              Driven by quality and innovation, we create spill kits designed to
              handle any challenge, giving you reliable protection that meets
              your needs and exceeds expectations.
            </p>
            <div className="flex items-center gap-[1rem]">
              <i className="fa-solid fa-phone text-[1.6rem]"></i>
              <a href="tel:7827258487" className="text-text-primary text-[1.6rem] font-medium no-underline transition-all duration-200 hover:text-primary">
                &nbsp; 7827258487
              </a>
            </div>
            <div className="flex items-center gap-[1rem]">
              <i className="fa-solid fa-envelope text-[1.6rem]"></i>
              <a href="mailto:prateek@safentity.in" className="text-text-primary text-[1.6rem] font-medium no-underline transition-all duration-200 hover:text-primary">
                &nbsp; prateek@safentity.in
              </a>
            </div>
            <div>
              <h5 className="text-[2.2rem] underline">Shop</h5>
            </div>
            <div className="flex items-start gap-[1rem]">
              <i className="fa-solid fa-location-dot text-[1.6rem] mt-[0.3rem]"></i>
              <a
                href="https://maps.app.goo.gl/Yvu1Wvd3uWFyUGD87?g_st=aw"
                className="text-text-primary text-[1.6rem] font-medium no-underline leading-[1.6] transition-all duration-200 hover:text-primary"
              >
                &nbsp; 870-A/1, Raja Garden, Old Faridabad, Faridabad,
                <br /> HR-121002
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <BookKit />
      <Footer />
    </section>
  )
}
