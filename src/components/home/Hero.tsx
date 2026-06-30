"use client"

import Link from "next/link"
import Image from "next/image"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function Hero() {
  const { goUp, scrollToTop } = useScrollToTop()

  return (
    <section id="home" className="w-full h-[97vh] bg-surface-light">
      <div className="container">
        <div className="w-full h-screen flex items-center max-[800px]:justify-center">
          <div className="flex flex-col z-[3] max-w-[50rem] mt-[5rem] max-[800px]:text-center max-[800px]:items-center">
            <h4 className="text-[2.2rem] font-rubik text-text-primary">
              Plan your spill response now
            </h4>
            <h1 className="text-[5.2rem] font-poppins font-bold text-text-primary leading-[1.2] mt-[1rem] mb-[2.3rem]">
              Save <span className="text-primary">big</span> with our spill kits
            </h1>
            <p className="text-[1.6rem] font-rubik leading-[1.6] text-text-secondary mb-[4rem]">
              Best prices, flexible choices, and spill protection you can count
              on, stay ready with our top-notch containment solutions
            </p>
            <div className="flex gap-[2rem] text-[1.6rem] font-rubik max-[450px]:flex-col">
              <Link
                href="/spillkits"
                className="bg-primary text-text-primary font-medium px-[3rem] py-[1.5rem] border-2 border-primary rounded-[3px] no-underline transition-all duration-300 hover:bg-transparent hover:text-primary"
              >
                Order Now &nbsp;
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>

          <Image
            src="/images/hero/hero-img.png"
            alt="spillkit"
            width={600}
            height={600}
            className="z-[2] w-[60%] mt-[5rem] max-[800px]:hidden"
          />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`fixed text-[2.5rem] text-white bg-primary border-[3px] border-solid border-white w-[2rem] h-[2rem] bottom-[5rem] right-[5rem] z-20 p-[2rem] cursor-pointer items-center justify-center ${
          goUp ? "flex" : "hidden"
        }`}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </section>
  )
}
