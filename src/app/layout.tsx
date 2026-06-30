import type { Metadata } from "next"
import { Rubik, Poppins } from "next/font/google"
import { Toaster } from "sonner"
import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Resq Spill Safe",
  description:
    "Best prices, flexible choices, and spill protection you can count on. Stay ready with our top-notch containment solutions.",
  icons: {
    icon: "/spill-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${poppins.variable}`}>
      <head>
        <script
          src="https://kit.fontawesome.com/64088e4bb3.js"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
