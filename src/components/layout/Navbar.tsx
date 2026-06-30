"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants"

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const openNav = () => setNav((prev) => !prev)

  return (
    <nav>
      <div className="max-w-[133rem] w-full mx-auto flex justify-between items-center p-[2.7rem_2rem] absolute left-0 right-0 bg-transparent z-[99999]">
        <Link href="/" className="w-[10rem] max-[1000px]:w-[8rem]">
          <Image
            src="/images/logo/resq-logo.png"
            alt="logo-img"
            width={100}
            height={40}
            className="w-full h-full"
          />
        </Link>

        <div
          className="hidden max-[1000px]:flex max-[1000px]:items-center text-[2.8rem] cursor-pointer hover:text-primary"
          onClick={openNav}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className="flex items-center gap-[2.1rem] list-none max-[1000px]:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-primary font-rubik text-[1.6rem] font-medium no-underline transition-all duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="max-[1000px]:hidden">
          <Link
            href="/contact"
            className="inline-block bg-primary text-text-primary font-rubik text-[1.6rem] font-medium px-[3rem] py-[1.5rem] border-2 border-primary rounded-[3px] no-underline transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`flex flex-col w-full h-screen fixed top-0 bg-white z-[999999] justify-center items-center transition-all duration-500 ease-in-out ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="text-[3rem] absolute top-[3.5rem] right-[3.5rem] cursor-pointer transition-all duration-300 hover:text-primary-hover"
          onClick={openNav}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="flex flex-col list-none text-[2.3rem] gap-[3rem] text-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-primary font-medium no-underline transition-all duration-300 hover:text-primary-hover"
                onClick={openNav}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
