import type { Metadata } from "next"
import HeroPagesforSpillKits from "@/components/shared/HeroPagesforSpillKits"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"
import KitDetails from "@/components/products/KitDetails"
import { PRODUCTS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Chemical Spill Kits | Resq Spill Safe",
  description:
    "Stay Prepared and Minimize Risk with our Chemical Spill Kits. Explore our range of chemical absorbent spill kits.",
}

export default function ChemicalPage() {
  const products = PRODUCTS.chemical

  return (
    <section className="chemical-page">
      <HeroPagesforSpillKits name="Chemical" />
      <div className="container">
        <div className="bg-white pt-[10rem] text-text-primary">
          <div className="flex flex-col mx-auto text-center max-w-[70rem] mb-[5rem]">
            <h4 className="text-[2.2rem] font-rubik font-medium">
              Chemical Spill Kits
            </h4>
            <h2 className="text-[4.2rem] mb-[1.4rem] max-md:text-[3rem]">
              Stay Prepared and Minimize Risk with our Chemical Spill Kits
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
