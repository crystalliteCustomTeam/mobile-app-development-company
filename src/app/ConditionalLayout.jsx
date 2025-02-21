"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
const Header = dynamic(() => import("@/src/app/layout/header"))
const Footer = dynamic(() => import("@/src/app/layout/footer"))
import "@/src/app/globals.scss"
import "@/styles/globals.css"
import LpHeader from "./website-development-services/layout/header"
import LpFooter from "./website-development-services/layout/footer"
import LcFooter from "@/src/components/LocationsFooter"

const styleChange = [
  "/about-us",
  "/case-studies/singles-up",
  "/case-studies/vifty",
  "/case-studies/soul-scribe",
  "/case-studies/nutri-snap",
  "/contact-us",
]
const isLightHeader = [
  "/case-studies/singles-up",
  "/case-studies/vifty",
  "/case-studies/soul-scribe",
  "/case-studies/nutri-snap",
]
const isDarkHeader = [
  "/",
  "/portfolio",
  "/about-us",
  "/mobile-application-development-services",
  "/contact-us",
  "/thank-you",
  "/blog/",
]

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(true)
  const [isLight, setIsLight] = useState(true)
  const [isLpHeaderFooter, setIsLpHeaderFooter] = useState(false)
  const [islocationsFooter, setIslocationsFooter] = useState(false)

  // Footers Manage For Default , LPs & Locations
  const footerMapping = {
    islocationsFooter: <LcFooter />,
    isLpHeaderFooter: <LpFooter />,
    default: <Footer />,
  }
  // Footers Manage For Default , LPs & Locations
  const footerComponent = islocationsFooter
    ? footerMapping.islocationsFooter
    : isLpHeaderFooter
    ? footerMapping.isLpHeaderFooter
    : footerMapping.default

  useEffect(() => {
    setIsLight(
      isLightHeader.includes(pathname) || pathname.startsWith("/case-studies/")
    )
    setIsDark(isDarkHeader.includes(pathname) || pathname.startsWith("/blog/"))

    if (typeof window !== "undefined") {
      const pathname = window.location.pathname
      document.body.style.fontFamily = ""
      if (!styleChange.includes(pathname)) {
        document.body.style.fontFamily = '"SF-Pro-Display", sans-serif'
      } else {
        document.body.style.fontFamily = '"Poppins", sans-serif'
      }
    }
  }, [pathname])
  return (
    <>
      {isLpHeaderFooter ? (
        <LpHeader isLightHeader={isDark} isDarkHeader={isLight} />
      ) : (
        <Header isLightHeader={isDark} isDarkHeader={isLight} />
      )}
      {children}

      {footerComponent}
    </>
  )
}
export default ConditionalLayout
