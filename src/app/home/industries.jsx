"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

const Industries = ({ data, slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const activateSlide = useCallback((index) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
            setActiveSlide(index);
        }
    }, [emblaApi]);

    const nextSlide = useCallback(() => {
        if (emblaApi && !isPaused) {
            const slideCount = emblaApi.slideNodes().length;
            const nextIndex = (activeSlide + 1) % slideCount;
            activateSlide(nextIndex);
        }
    }, [activeSlide, emblaApi, isPaused, activateSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextSlide]);


    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className={`${styles.industriesSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="my-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div
                                            className={`${styles.embla__slide} ${activeSlide === index ? styles.active : ''}`}
                                            key={index}
                                            onClick={() => activateSlide(index)}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}                                         >
                                            <div className={styles.industriesItem}>
                                                <div className={styles.industriesIcon}>
                                                    {item.icon}
                                                </div>
                                                <div className={styles.industriesTxt}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.txt}</p>
                                                    <div className={styles.viewLinks}>
                                                        <Link href={item.url}>
                                                            <span className={styles.btnBox}><ServiceArrow /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={() => emblaApi?.scrollPrev()}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={() => emblaApi?.scrollNext()}>
                                    <ServiceArrow direction="next" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Industries
