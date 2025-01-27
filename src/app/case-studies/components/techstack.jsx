"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/techstack.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"




const TechStack = ({ data, list }) => {
    const [emblaRef] = useEmblaCarousel({ loop: 'true', align: 'start' }, [Autoplay()])
    return (
        <section className={`${styles.techstackSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6} className={styles.bgBox}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {list.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            < div className={styles.techstackBox} >
                                                <div className={styles.techstackIcon}>
                                                    <Image src={item.icon} alt={item.title} width={63} height={63} />
                                                </div>
                                                <h6>{item.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default TechStack