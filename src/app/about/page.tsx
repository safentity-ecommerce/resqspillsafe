import type { Metadata } from "next"
import Image from "next/image"
import HeroPages from "@/components/shared/HeroPages"
import SelectKit from "@/components/home/SelectKit"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "About | Resq Spill Safe",
  description:
    "At RESQ, we prioritize your safety and peace of mind. Our spill kits are crafted with high-quality materials.",
}

export default function AboutPage() {
  return (
    <section className="about-page">
      <HeroPages name="About" />
      <div className="container">
        <div className="flex gap-[5rem] max-w-[96rem] mx-auto my-[10rem] items-center max-[960px]:grid max-[960px]:grid-cols-1 max-[960px]:text-center max-[960px]:max-w-[49rem] max-[520px]:max-w-full">
          <div className="w-[43rem] h-[43rem] max-[960px]:mx-auto max-[520px]:w-full max-[520px]:h-auto">
            <Image
              src="/images/about/about-main.jpg"
              alt="boy-cleaning"
              width={430}
              height={430}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-text-primary">
            <h3 className="text-[2.2rem] font-rubik font-medium mb-[1rem]">
              About Company
            </h3>
            <h2 className="text-[4.2rem] leading-[1.2]">
              You&apos;re safe with us from start to spill
            </h2>
            <p className="text-[1.6rem] text-text-secondary font-rubik leading-[1.5] mt-[2rem] mb-[4rem]">
              At RESQ, we prioritize your safety and peace of mind. Our spill
              kits are crafted with high-quality materials and designed to
              provide reliable protection against spills of all types. From the
              moment you choose us, we&apos;re committed to providing you with
              exceptional service and support, ensuring that you&apos;re safe from
              start to spill. Trust us to be your partner in spill prevention
              and management.
            </p>
            <div className="grid grid-cols-3 gap-[4rem] max-[520px]:grid-cols-1 max-[520px]:mx-auto max-[520px]:gap-0">
              <div className="flex flex-col max-[520px]:items-center">
                <Image
                  src="/images/about/icon1.png"
                  alt="car-icon"
                  width={50}
                  height={50}
                  className="w-[5rem]"
                />
                <span className="flex items-center gap-[1rem] max-[520px]:flex-col max-[520px]:text-center">
                  <h4 className="text-[4.6rem]">3</h4>
                  <p className="text-[1.6rem] text-text-secondary">Spill Kit Types</p>
                </span>
              </div>
              <div className="flex flex-col max-[520px]:items-center">
                <Image
                  src="/images/about/icon3.png"
                  alt="car-icon"
                  width={50}
                  height={50}
                  className="w-[5rem]"
                />
                <span className="flex items-center gap-[1rem] max-[520px]:flex-col max-[520px]:text-center">
                  <h4 className="text-[4.6rem]">16</h4>
                  <p className="text-[1.6rem] text-text-secondary">Spill Kit Items</p>
                </span>
              </div>
              <div className="flex flex-col max-[520px]:items-center">
                <Image
                  src="/images/about/icon2.png"
                  alt="car-icon"
                  width={50}
                  height={50}
                  className="w-[5rem]"
                />
                <span className="flex items-center gap-[1rem] max-[520px]:flex-col max-[520px]:text-center">
                  <h4 className="text-[4.6rem]">20+</h4>
                  <p className="text-[1.6rem] text-text-secondary">Spill Kit Variations</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <SelectKit />
      </div>
      <BookKit />
      <Footer />
    </section>
  )
}
