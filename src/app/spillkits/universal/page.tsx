import type { Metadata } from "next"
import HeroPagesforSpillKits from "@/components/shared/HeroPagesforSpillKits"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"
import KitDetails from "@/components/products/KitDetails"
import { PRODUCTS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Universal Spill Kits | Resq Spill Safe",
  description:
    "All-in-One Spill Readiness. Explore our range of universal absorbent spill kits.",
}

export default function UniversalPage() {
  const products = PRODUCTS.universal

  return (
    <section className="universal-page">
      <HeroPagesforSpillKits name="Universal" />
      <div className="container">
        <div className="bg-white pt-[10rem] text-text-primary">
          <div className="flex flex-col mx-auto text-center max-w-[70rem] mb-[5rem]">
            <h4 className="text-[2.2rem] font-rubik font-medium">
              Universal Spill Kits
            </h4>
            <h2 className="text-[4.2rem] mb-[1.4rem] max-md:text-[3rem]">
              All-in-One Spill Readiness
            </h2>
          </div>
          {products.map((product) => (
            <KitDetails key={product.id} product={product} />
          ))}
        </div>
      </div>
      <BookKit />
      <Footer />
    </section>
  )
}
