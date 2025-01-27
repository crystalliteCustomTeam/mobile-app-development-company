"use client"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import Navigation from "@/src/app/website-development-services/layout/navigation"
import styles from "@/styles/layout/header.module.scss"
import { useState, useEffect } from "react"
import Image from "next/image"

const LpHeader = ({ isDarkHeader, isLightHeader }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      className={`${styles.headerSection} ${scrolled ? styles.active : ""}`}
    >
      <Container className="h-100">
        <Row className="h-100">
          <Col md={3} xs={6} sm={6} className="m-auto">
            <div className={styles.headerLogo}>
              <Link href="/">
                {!scrolled ? (
                  isLightHeader ? (
                    <Image
                      src={LogoBlue}
                      width={270}
                      alt="logo"
                      className="img-fluid"
                    />
                  ) : (
                    <Image
                      src={LogoMain}
                      width={270}
                      alt="logo"
                      className="img-fluid"
                    />
                  )
                ) : (
                  <Image
                    src={LogoBlue}
                    alt="logo"
                    width={220}
                    className="img-fluid"
                  />
                )}
              </Link>
            </div>
            <div className={styles.headermobileLogo}>
              <Link href="/">
                <Image src={LogoBlue} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col md={9} xs={6} sm={6} className="m-auto">
            <Navigation
              scrolled={scrolled}
              isLightHeader={isLightHeader}
              isDarkHeader={isDarkHeader}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LpHeader
