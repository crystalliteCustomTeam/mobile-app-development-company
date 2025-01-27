"use client"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/achieved.module.scss"
import { ArrowIcon } from '@/src/app/app-constants'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// Awards
import AwardsIMG01 from "media/awards/1.webp"
import AwardsIMG02 from "media/awards/2.webp"
import AwardsIMG03 from "media/awards/3.webp"
import AwardsIMG04 from "media/awards/4.webp"
import AwardsIMG05 from "media/awards/5.webp"
import AwardsIMG06 from "media/awards/6.webp"
import AwardsIMG07 from "media/awards/7.webp"

const options = { align: 'start', loop: "true" }

export const Awards = [
    {
        title: "Horizon Interactive Gold Award",
        year: "2024",
        AwardsIMG: AwardsIMG01.src
    },
    {
        title: "Top Rated App Development Companies in US",
        year: "2024",
        AwardsIMG: AwardsIMG02.src
    },
    {
        title: "Top App Performers Award",
        year: "2023",
        AwardsIMG: AwardsIMG05.src
    },
    {
        title: "Top Mobile App Development Company",
        year: "2023",
        AwardsIMG: AwardsIMG06.src
    },
    {
        title: "Dot COMM Platinum Award",
        year: "2023",
        AwardsIMG: AwardsIMG07.src
    },
    {
        title: "Clutch Global Company Award",
        year: "2022",
        AwardsIMG: AwardsIMG03.src
    },
    {
        title: "High User Satisfaction Award",
        year: "2022",
        AwardsIMG: AwardsIMG04.src
    }
]


const Achieved = () => {

    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.achievedSection} pt-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <h2>Awards That Validate Our Impactful App Solutions</h2>
                        <p>We have earned awards and recognition for our quality-first approach, successfully delivering advanced, complex projects with a talented team of developers, designers, and project managers.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>

                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>

                                    {Awards.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.achievedCard} key={index}>
                                                <div className={styles.achievedImg}>
                                                    <Image src={item.AwardsIMG} alt="Achieved Logo" width={120} height={120} />
                                                </div>
                                                <div className={styles.achievedContent}>
                                                    <div className={styles.data}>
                                                        {item.year}
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowIcon direction="next" />
                                </div>
                            </div>
                        </section>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Achieved