//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: '',
    description: '',
    url: '/website-development-services',
    siteName: '',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/website-development-services' },
  //===== GEO Tags =====
  other: {},
    //===== No-Index =====
    robots: {
      index: false,
      follow: false,
    },
 
}

export default function RootLayout({ children }) {
  return (children);
}