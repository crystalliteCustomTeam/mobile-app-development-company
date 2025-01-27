//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Top Mobile App Development Services | BitsWits",
    description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
    //===== OG Tags =====
    openGraph: {
        title: "Top Mobile App Development Services | BitsWits",
        description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
        url: '/mobile-application-development-services',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/mobile-application-development-services' },
    //===== No-Index =====
    robots: {
        index: true,
        follow: true,
    },
    //===== GEO Tags =====
    other: {
        "DC.title": "Top Mobile App Development Services | BitsWits",
        "geo.region": "US",
        "geo.placename": "Houston",
        "geo.position": "29.7372487; -95.4618603",
        "ICBM": "29.7372487; -95.4618603",
    }
}
export default function RootLayout({ children }) {
    return (children);
}