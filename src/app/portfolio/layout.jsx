
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "BitsWits Portfolio",
    description: "Discover BitsWits’ portfolio showcasing diverse app development projects that transform ideas into impactful digital solutions, enhancing user experiences.",
    //===== OG Tags =====
    openGraph: {
        title: "BitsWits Portfolio",
        description: "Discover BitsWits’ portfolio showcasing diverse app development projects that transform ideas into impactful digital solutions, enhancing user experiences.",
        url: '/portfolio',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/portfolio' },
}


export default function RootLayout({ children }) {
    return (children)
}
