import Hero from "@/components/home/Hero"
import SelectKit from "@/components/home/SelectKit"
import Banner from "@/components/home/Banner"
import ChooseUs from "@/components/home/ChooseUs"
import Client from "@/components/home/Client"
import Testimonial from "@/components/home/Testimonial"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectKit />
      <Banner />
      <ChooseUs />
      <Client />
      <Testimonial />
      <Footer />
    </>
  )
}
