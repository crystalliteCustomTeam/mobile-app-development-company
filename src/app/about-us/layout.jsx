
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "About Us | BitsWits",
    description: "Explore our story, mission, and expert team committed to delivering exceptional digital solutions.",
    //===== OG Tags =====
    openGraph: {
        title: "About Us | BitsWits",
        description: "Explore our story, mission, and expert team committed to delivering exceptional digital solutions.",
        url: '/about-us',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/about-us' },
}


export default function RootLayout({ children }) {
    return (children)
}
