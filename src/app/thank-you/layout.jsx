
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Portfolio | BitsWits",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Portfolio | BitsWits",
        description: "",
        url: '/thank-you',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/thank-you' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    },
}


export default function RootLayout({ children }) {
    return (children)
}
