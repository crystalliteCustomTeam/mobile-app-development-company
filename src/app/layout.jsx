import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalLayout from "@/src/app/ConditionalLayout"
import { Scripts } from "./Scripts"

//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://www.mobileappdevelopmentcompany.us/"),
  //===== Meta Tags =====
  title: "Top Mobile App Development Services | BitsWits",
  description:
    "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
  //===== OG Tags =====
  openGraph: {
    title: "Top Mobile App Development Services | BitsWits",
    description:
      "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
    url: "/",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== GEO Tags =====

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "YmkRUIVaay4g7dLHTx9GqUxWZkAg8A_wRiO5LyevdOA",
      ]
    },
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      <Scripts />
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
