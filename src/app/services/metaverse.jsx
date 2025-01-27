
"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import styles from '@/styles/services/metaverse.module.scss'
import ButtonCommon from "@/src/components/common/button"
import { ArrowIcon } from '@/src/app/app-constants'


const Metaverse = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.metaverseSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={12}>
                        <h2>Our High-Impact Mobile Application Development Portfolio!</h2>
                        <p>Drive business growth and enhance user engagement with our top-tier apps! As a trusted mobile application development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.metaverseItem}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.img} alt={item.tit} width={450} height={550} />
                                                </div>
                                                <div className={styles.hoverContent}>
                                                    <h4>{item.tit}</h4>
                                                    <p>{item.txt}</p>
                                                    <ButtonCommon txt="Let's Connect" />
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

export default Metaverse 