import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import HeroPages from "@/components/shared/HeroPages"
import BookKit from "@/components/shared/BookKit"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Spill Kits | Resq Spill Safe",
  description:
    "Explore our range of oil, chemical, and universal spill kits. Effective solutions for controlling and cleaning spills.",
}

const kits = [
  {
    href: "/spillkits/oil",
    img: "/images/spillkit/oil.png",
    title: "oil spill kits",
    desc: "An oil spill kit, a guardian of our ecosystems, equips us to combat environmental disasters, absorbing and containing the black tide, restoring nature's balance.",
  },
  {
    href: "/spillkits/chemical",
    img: "/images/spillkit/chemical.png",
    title: "chemical spill kits",
    desc: "A chemical spill kit, a shield against hazardous spills, empowers us to swiftly neutralize and safely handle chemical accidents, protecting lives and preserving our environment.",
  },
  {
    href: "/spillkits/universal",
    img: "/images/spillkit/universal.png",
    title: "universal spill kits",
    desc: "From oil to chemicals, a universal spill kit, your all-in-one guardian against environmental disasters",
  },
]

export default function SpillKitsPage() {
  return (
    <section className="spillkit-page">
      <HeroPages name="Spill Kits" />
      <div className="bg-white py-[10rem] text-text-primary">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col mx-auto text-center max-w-[70rem] mb-[5rem]">
              <h4 className="text-[2.2rem] font-rubik font-medium">
                Spill Kit Essentials
              </h4>
              <h2 className="text-[4.2rem] mb-[1.4rem]">
                Effective Solutions for Controlling and Cleaning Spills
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-[5rem] justify-items-center w-full">
              {kits.map((kit, i) => (
                <Link
                  key={kit.href}
                  href={kit.href}
                  className="no-underline text-text-primary"
                >
                  <div
                    className={`flex bg-white shadow-[0px_0px_10px_rgb(0_0_0_/_10%)] rounded-[1.7rem] h-[40rem] p-[2rem] gap-[5rem] max-[1020px]:h-auto max-[1020px]:flex-col max-[1020px]:gap-[3rem] max-[1020px]:w-fit max-[1020px]:mx-auto max-[400px]:w-full ${
                      i % 2 === 1 ? "flex-row-reverse max-[1020px]:flex-col" : ""
                    }`}
                  >
                    <div className="w-[53rem] h-auto rounded-[1.7rem] bg-surface-muted overflow-hidden shadow-[0px_0px_10px_rgb(0_0_0_/_10%)] max-[650px]:w-full">
                      <Image
                        src={kit.img}
                        alt={kit.title}
                        width={530}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col w-[30rem] text-center justify-center max-[1020px]:mx-auto max-[400px]:w-full">
                      <h3 className="text-[1.7rem] uppercase mb-[2rem]">
                        {kit.title} <span className="text-[1.7rem]">🫙</span>
                      </h3>
                      <p className="text-[1.7rem] text-text-secondary text-center font-medium">
                        {kit.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookKit />
      <Footer />
    </section>
  )
}
