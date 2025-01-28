"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
const Header = dynamic(() => import("@/src/app/layout/header"))
const Footer = dynamic(() => import("@/src/app/layout/footer"))
import "@/src/app/globals.scss" // custom global scss
import "@/styles/globals.css" // custom global css
import LpHeader from "./website-development-services/layout/header"
import LpFooter from "./website-development-services/layout/footer"
import LcFooter from "@/src/components/LocationsFooter"

const styleChange = [
  "/about-us",
  // "/flutter-app-development",
  // "/android-app-development-company",
  // "/react-native-app-development",
  // "/ios-app-development-company",
  // "/cross-platform-app-development-services",
  // "/nft-game-development-company",
  // "/ai-development-company",
  // "/blockchain-game-development-company",
  // "/mobile-game-development-company",
  // "/hybrid-app-development-company",
  // "/healthcare-app-development-services",
  // "/ecommerce-app-development",
  // "/education-app-development",
  // "/real-estate-app-development-company",
  // "/music-app-development-company",
  // "/automotive-software-development",
  // "/social-media-app-development-company",
  // "/logistics-software-development",
  // "/fintech-app-development",
  // "/portfolio",
  "/case-studies/singles-up",
  "/case-studies/vifty",
  "/case-studies/soul-scribe",
  "/case-studies/nutri-snap",
  // "/case-studies/home-pro-connect",
  "/contact-us",
]
const isLightHeader = [
  // "/portfolio",
  // "/mobile-game-development-company",
  // "/logistics-software-development",
  // "/healthcare-app-development-services",
  // "/education-app-development",
  // "/music-app-development-company",
  // "/social-media-app-development-company",
  // "/ecommerce-app-development",
  // "/music-app-development-company",
  // "/social-media-app-development-company",
  // "/real-estate-app-development-company",
  // "/automotive-software-development",
  // "/fintech-app-development",
  "/case-studies/singles-up",
  "/case-studies/vifty",
  "/case-studies/soul-scribe",
  "/case-studies/nutri-snap",
  // "/case-studies/home-pro-connect",
]
const isDarkHeader = [
  "/",
  "/portfolio",
  "/about-us",
  // "/flutter-app-development",
  // "/android-app-development-company",
  // "/react-native-app-development",
  // "/ios-app-development-company",
  // "/cross-platform-app-development-services",
  // "/nft-game-development-company",
  // "/ai-development-company",
  // "/blockchain-game-development-company",
  "/mobile-application-development-services",
  // "/hybrid-app-development-company",
  // "/lp/mobile-application-development-services",
  "/contact-us",
  // "/bitswits-services-page-1",
  // "/mobile-application-development-services",
  // "/lp/mobile-app-development-services",
  "/thank-you",
  "/blog/",
  // "/lp/mobile-app-development-services",
]

const lpHeaderFooterPaths = [
  // "/website-development-services",
  // "/app-marketing",
  // "/top-mobile-app-developers",
  // "/lp/mobile-app-development-services",
]
const locationsFooterPaths = [
  // "/app-development-austin",
  // "/app-development-chicago",
  // "/mobile-app-development-company-dallas",
  // "/mobile-app-development-company-denver",
  // "/mobile-app-development-company-dubai",
  // "/app-development-florida",
  // "/mobile-app-development-company-miami",
  // "/app-development-company-new-york",
  // "/mobile-app-development-company-saudi-arabia",
  // "/app-development-company-toronto",
  // "/app-development-company-washington-dc",
  // "/app-development-houston",
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
    setIsLpHeaderFooter(lpHeaderFooterPaths.includes(pathname))
    setIslocationsFooter(locationsFooterPaths.includes(pathname))

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
