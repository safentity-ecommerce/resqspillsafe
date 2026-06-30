import type { Metadata } from "next"
import HeroPages from "@/components/shared/HeroPages"
import Testimonial from "@/components/home/Testimonial"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Testimonials | Resq Spill Safe",
  description: "Read what our clients say about RESQ Spill Safe products and services.",
}

export default function TestimonialPage() {
  return (
    <section className="testimonial-page">
      <HeroPages name="Testimonial" />
      <Testimonial />
      <BookKit />
      <Footer />
    </section>
  )
}
