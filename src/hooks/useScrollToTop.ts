"use client"

import { useEffect, useState } from "react"

export function useScrollToTop() {
  const [goUp, setGoUp] = useState(false)

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.pageYOffset > 600)
    }
    window.addEventListener("scroll", onPageScroll)
    return () => window.removeEventListener("scroll", onPageScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { goUp, scrollToTop }
}
