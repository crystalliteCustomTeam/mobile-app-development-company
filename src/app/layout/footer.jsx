import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import CopyRight from "@/src/app/layout/copyright"
import styles from "@/styles/layout/footer.module.scss"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@/src/app/app-constants"
import { FaLocationArrow } from "react-icons/fa"
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
  return (
    <>
      <section className={`${styles.footerSection} bgBlack pb-50`}>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className={styles.footerMainBox}>
                <div className={styles.linksItem}>
                  <h6 className="mt-5 pt-5">MainLinks</h6>
                  <ul>
                    {MainLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.footerLocationBox}>
                <div className={styles.footerLocListing}>
                  <div className={styles.linksItem}>
                    <h6>Locations</h6>
                  </div>
                  <ul className={styles.locationLinks}>
                    <li className="d-flex align-items-center gap-2">
                      <FaLocationArrow className="text-white" />
                      <Link
                        href="https://maps.app.goo.gl/voyh3yTu9b3BVKus9"
                        target="_blank"
                      >
                        4201 Main St Suite # 200-122, Houston, TX 77002
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footerSocialListing}>
                  <div className={styles.mailContact}>
                    <a href="mailto:info@bitswits.co">info@bitswits.co</a>
                    <a href="tel:+1 302 217-3745">+1 302 217-3745</a>
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CopyRight />
    </>
  )
}

export default Footer
