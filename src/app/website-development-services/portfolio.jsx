"use client"
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "@/styles/website-development-services/portfolio.module.scss";
import Img1 from "media/website-development-services/portfolio/portfolio-img-1.webp";
import Img2 from "media/website-development-services/portfolio/portfolio-img-2.webp";
import Img4 from "media/website-development-services/portfolio/portfolio-img-4.webp";
import Img5 from "media/website-development-services/portfolio/portfolio-img-5.webp";
import Img6 from "media/website-development-services/portfolio/portfolio-img-6.webp";
import Img7 from "media/website-development-services/portfolio/portfolio-img-7.webp";
import Img8 from "media/website-development-services/portfolio/portfolio-img-8.webp";
import Image from "next/image";

const data = {
    subTitle: "Industries",
    title: "Delivering Impact Across Key Sectors",
    text: "We work across diverse industries, building solutions that increase user engagement, improve performance, and drive growth. Our approach aligns with the specific needs and challenges unique to each sector we serve."
};

const tabs = [
    {
        title: "All",
        content: {
            images: [
                Img1,
                Img2,
                Img4,
                Img5,
                Img6,
                Img7,
                Img8,
                Img7,
            ],
        },
    },
    {
        title: "Beauty",
        content: {
            images: [
                Img5,
                Img6,
                Img7,
                Img8,
                Img1,
                Img2,
                Img4,
                Img2,
            ],
        },
    },
    {
        title: "Real Estate",
        content: {
            images: [
                Img1,
                Img2,
                Img7,
                Img8,
                Img4,
                Img5,
                Img6,
                Img5,
            ],
        },
    },
    {
        title: "Health Care",
        content: {
            images: [
                Img8,
                Img7,
                Img6,
                Img5,
                Img4,
                Img2,
                Img1,
                Img2,
            ],
        },
    },
    {
        title: "Food",
        content: {
            images: [
                Img1,
                Img2,
                Img4,
                Img5,
                Img6,
                Img7,
                Img8,
                Img7,
            ],
        },
    },
    {
        title: "Educational",
        content: {
            images: [
                Img8,
                Img7,
                Img6,
                Img5,
                Img4,
                Img2,
                Img1,
                Img2,
            ],
        },
    },
];

const Portfolio = () => {
    const [isSliderActive, setIsSliderActive] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setIsSliderActive(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab
    const options = { loop: false }
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false, topOnInteraction: false, delay: 2000, })
    ])

    return (
        <section className={`${styles.portfolioSection} p-100`} id="portfolio">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto ">
                        <div className={`${styles.subTitle} ${styles.txtColorCenter}`}>{data?.subTitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabName}>
                            <ul>
                                {tabs.map((tab, index) => (
                                    <li
                                        key={index}
                                        className={index === activeTab ? styles.active : ""}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            <div className={styles.tabtxtBox}>
                                <Row>

                                    {isSliderActive ? (
                                        <Col>
                                            <div className={styles.embla}>
                                                <div className={styles.embla__viewport} ref={emblaRef}>
                                                    <div className={styles.embla__container}>
                                                        {tabs[activeTab].content.images.map((src, index) => (
                                                            <div className={styles.embla__slide} key={index}>
                                                                <div className={styles.Img}>
                                                                    <Image
                                                                        alt={`Image for ${tabs[activeTab].title}`}

                                                                        src={src}
                                                                        height={405}
                                                                        width={622}
                                                                    />
                                                                    <div className={styles.ImgOverlay}></div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ) : <>

                                        {tabs[activeTab].content.images.map((src, index) => (
                                            <Col xs={12} sm={4} md={3} key={index} >
                                                <div className={styles.Img}>
                                                    <Image
                                                        alt={`Image for ${tabs[activeTab].title}`}

                                                        src={src}
                                                        height={405}
                                                        width={622}
                                                    />
                                                    <div className={styles.ImgOverlay}></div>
                                                </div>
                                            </Col>
                                        ))}
                                    </>}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;