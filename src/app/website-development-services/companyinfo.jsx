"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/website-development-services/companyinfo.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import IMG01 from "media/website-development-services/award/1.webp"
import IMG02 from "media/website-development-services/award/2.webp"
import IMG03 from "media/website-development-services/award/3.webp"
import IMG04 from "media/website-development-services/award/4.webp"
import IMG05 from "media/website-development-services/award/5.webp"
import Image from "next/image"

const options = { align: 'start', loop: "true" }

export const Awards = [
    {
        AwardsIMG: IMG01.src
    },
    {
        AwardsIMG: IMG02.src
    },
    {
        AwardsIMG: IMG03.src
    },
    {
        AwardsIMG: IMG04.src
    },
    {
        AwardsIMG: IMG05.src
    },
]
const CompanyInfo = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    return (
        <section className={`${styles.companyInfoSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} md={12} className="my-auto">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                          {data?.content}
                        <div className={styles.companyStats}>
                            <div className={styles.statsItem}>
                                <div className="txtColor">10+</div>
                                <span>Year’s Experience</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">1200 +</div>
                                <span>Successful Projects</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">60+</div>
                                <span>Experts</span>
                            </div>
                            <div className={styles.statsItem}>
                                <div className="txtColor">100+</div>
                                <span>Global Clients</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {Awards.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.awardsImg}>
                                                <Image src={item.AwardsIMG} alt="Achieved Logo" width={250} height={250} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.companyVideo}>
                <source src='/videos/companyVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default CompanyInfo