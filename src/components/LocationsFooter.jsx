import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import CopyRight from "@/src/app/layout/copyright"
import Location from "@/src/app/services/locationServices"
import styles from "@/styles/layout/footer.module.scss"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@/src/app/app-constants"

const ServicesMenu = [
  {
    title: "Flutter app development",
    url: "/flutter-app-development",
  },
  {
    title: "Android app development",
    url: "/android-app-development-company",
  },
  {
    title: "React Native app development",
    url: "/react-native-app-development",
  },
  {
    title: "iOS app development",
    url: "/ios-app-development-company",
  },
  {
    title: "Cross Platform app development",
    url: "/cross-platform-app-development-services",
  },
  {
    title: "NFT game development",
    url: "/nft-game-development-company",
  },
  {
    title: "AI Development Company",
    url: "/ai-development-company",
  },
  {
    title: "Blockchain game development",
    url: "/blockchain-game-development-company",
  },
  {
    title: "Mobile Game Development",
    url: "/mobile-game-development-company",
  },
  {
    title: "Hybrid app development",
    url: "/hybrid-app-development-company",
  },
]
const IndustriesMenu = [
  {
    title: "Healthcare",
    url: "/healthcare-app-development-services",
  },
  {
    title: "E-Commerce",
    url: "/ecommerce-app-development",
  },
  {
    title: "Education",
    url: "/education-app-development",
  },
  {
    title: "Real Estate",
    url: "/real-estate-app-development-company",
  },
  {
    title: "Music",
    url: "/music-app-development-company",
  },
  {
    title: "Automotive",
    url: "/automotive-software-development",
  },
  {
    title: "Social Media",
    url: "/social-media-app-development-company",
  },
  {
    title: "Logistics",
    url: "/logistics-software-development",
  },
  {
    title: "Fintech",
    url: "/fintech-app-development",
  },
  {
    title: "Taxi App",
    url: "/taxi-app-development-company",
  },
]
const LocationsMenu = [
  {
    title: "Austin",
    url: "/app-development-austin",
  },
  {
    title: "Chicago",
    url: "/app-development-chicago",
  },
  {
    title: "Dallas",
    url: "/mobile-app-development-company-dallas",
  },
  {
    title: "Denver",
    url: "/mobile-app-development-company-denver",
  },
  {
    title: "Dubai",
    url: "/mobile-app-development-company-dubai",
  },
  {
    title: "Florida",
    url: "/app-development-florida",
  },
  {
    title: "Miami",
    url: "/mobile-app-development-company-miami",
  },
  {
    title: "New York",
    url: "/app-development-company-new-york",
  },
  {
    title: "Saudi Arabia",
    url: "/mobile-app-development-company-saudi-arabia",
  },
  {
    title: "Toronto",
    url: "/app-development-company-toronto",
  },
  {
    title: "Washington DC",
    url: "/app-development-company-washington-dc",
  },
  {
    title: "Houston",
    url: "/app-development-houston",
  },
]
const LocationsMap = [
  {
    title: "HOU",
    url: "https://maps.app.goo.gl/onTtH6csSWJu2gAb7",
  },
  {
    title: "NYC",
    url: "https://maps.app.goo.gl/CPdXRcRzGxGRAuNU8",
  },
  {
    title: "LA",
    url: "https://maps.app.goo.gl/ot7knKM1rXFFjpKMA",
  },
  {
    title: "SF",
    url: "https://maps.app.goo.gl/SzwvHzAKoLgiwWPm7",
  },
  {
    title: "MIA",
    url: "https://maps.app.goo.gl/sZDSxoSewEBHY1z27",
  },
  {
    title: "CHI",
    url: "https://maps.app.goo.gl/VH6Dkp1J2wtNvLBC6",
  },
  {
    title: "DTX",
    url: "https://maps.app.goo.gl/i76RsaokYHwn47vU9",
  },
  {
    title: "DNV",
    url: "https://maps.app.goo.gl/sYmX44iWw2fmkVD1A",
  },
  {
    title: "AXT",
    url: "https://maps.app.goo.gl/Q7FrDSAEYmENiHRF7",
  },
  {
    title: "PIE",
    url: "https://maps.app.goo.gl/YEEuBJKd9GvXuMk18",
  },
  {
    title: "TRO",
    url: "https://maps.app.goo.gl/dhULjcCFCiZ9fNyQ7",
  },
  {
    title: "DXB",
    url: "https://maps.app.goo.gl/NzJaVuqgdpLYyaT28",
  },
  {
    title: "QA",
    url: "https://maps.app.goo.gl/qimC1ofuhhu3z512A",
  },
  {
    title: "SRJ",
    url: "https://maps.app.goo.gl/nbce4oEJoivkzVnt5",
  },
  {
    title: "BH",
    url: "https://maps.app.goo.gl/N52TCmfz7GQbH35m8",
  },
]
const MainLinks = [
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Blogs",
    url: "/blog",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    url: "/term-and-condition",
  },
]

const SocailLinks = [
  {
    icon: <Instagram />,
    url: "https://www.instagram.com/officialBitsWits/",
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/officialbitswits/",
  },
  {
    icon: <Twitter />,
    url: "https://twitter.com/BitsWits_/",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/company/officialbitswits",
  },
  {
    icon: <Youtube />,
    url: "https://www.youtube.com/@officialBitsWits",
  },
]

const Footer = () => {
  // No Redirection Function For Locations Links
  const handleClick = (e) => {
    e.preventDefault()
    console.log("Location clicked!")
  }
  // No Redirection Function For Locations Links

  return (
    <>
      <Location />
      <section className={`${styles.footerSection} bgBlack pb-50`}>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className={styles.footerMainBox}>
                {/* <div className={styles.linksItem}>
                  <h6>Services</h6>
                  <ul>
                    {ServicesMenu.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.linksItem}>
                  <h6>Industries</h6>
                  <ul>
                    {IndustriesMenu.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className={styles.linksItem}>
                  <h6>MainLinks</h6>
                  <ul>
                    {MainLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className={styles.footerLocationBoxNew}>
                <div className={styles.footerLocListing}>
                  <div className={styles.linksItem}>
                    <h6>Location</h6>
                    <ul>
                      {LocationsMenu.map((item, index) => (
                        <li key={index}>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className={styles.locationLinks}>
                    {LocationsMap.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url} onClick={handleClick}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.footerSocialListing}>
                  <div className={styles.mailContact}>
                    <a href="mailto:info@bitswits.co">info@bitswits.co</a>
                    <a href="tel:+1 302 217 3745">+1 302 217 3745</a>
                  </div>
                  <div className={styles.linksItem}>
                    <ul>
                      {SocailLinks.map((item, index) => (
                        <li key={index}>
                          <Link href={item.url}>{item.icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <CopyRight />
    </>
  )
}

export default Footer
