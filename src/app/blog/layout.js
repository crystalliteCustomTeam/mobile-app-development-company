//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Blogs - BitsWits",
  description: "Get the latest app industry news and insights to satisfy your tech cravings, keeping you updated with everything you need in the app world.",
  //===== OG Tags =====
  openGraph: {
    title: 'Blogs - BitsWits',
    description: 'Get the latest app industry news and insights to satisfy your tech cravings, keeping you updated with everything you need in the app world.',
    url: '/blog',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/blog' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}