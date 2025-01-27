"use client"
import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Testimonials.module.css"
import Slider from 'react-slick'
// Images
import Client1 from "media/services/client-1.svg"
import QouteOne from "media/services/quote-left.svg"
import QouteTwo from "media/services/quote-right.svg"
import TestiOne from "media/services/testimonials-1.svg"
import TestiTwo from "media/services/testimonials-2.svg"
import TestiThree from "media/services/testimonials-3.svg"

const Testimonials = () => {
    const testimonialSlider = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
    };
    return (
        <section className={styles.testimonialsSec}>
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={styles.sliderContent}>
                            <div className="txt">
                                <h2 className='manrope font-bold text-center text-white mb-3 mb-md-5 pb-3'><span className='newfycolr'>Client</span> Testimonial</h2>
                            </div>
                            <Slider {...testimonialSlider} className={`testimonialSlider pb-lg-4 ${styles.testimonialSlider}`}>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>BitsWits went above and beyond with their 3D game development services. Their professional game developers delivered excellent UI/UX for our PC game. Highly recommended for future projects!</p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>John Smith</h4>
                                                <h6 className='manrope font-medium text-center'>CEO of GameTech Inc.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>The responsive team at BitsWits exceeded our expectations. Their precise attention to technicalities ensured no hiccups in our Android and iOS games. We recommend them without hesitation!</p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>Emily Davis</h4>
                                                <h6 className='manrope font-medium text-center'>Project Manager at FunApps</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>BitsWits provided excellent 3D game development services. Their ethics and minimal feedback needed during our iOS game project were impressive. We look forward to collaborating on future projects.</p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>Michael Johnson</h4>
                                                <h6 className='manrope font-medium text-center'>CTO of PlayWorld</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>The professional game developers at BitsWits created a flawless UI/UX for our Android game. Their dedication and precision went above and beyond, delivering without any hiccups. Highly recommended!</p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>Sarah Brown</h4>
                                                <h6 className='manrope font-medium text-center'>Founder of VirtualVisions</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonials">
                                        <div className="image">
                                            <Image src={Client1} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                        </div>
                                        <div className={styles.sliderContent}>
                                            <div className={styles.quoteOne}>
                                                <Image src={QouteOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <p className='manrope font-regular text-center text-white mb-4'>BitsWits exceeded expectations with their excellent 3D game development services. The team was responsive and handled all technicalities seamlessly. We are eager to work with them on future projects!
                                            </p>
                                            <div className={styles.quoteTwo}>
                                                <Image src={QouteTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="clientName">
                                                <h4 className='manrope font-bold text-center'>David Wilson</h4>
                                                <h6 className='manrope font-medium text-center'>Lead Developer at FuturePlay Studios</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 pt-5 mt-5">
                                <div>
                                    <Image src={TestiOne} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiTwo} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiThree} alt='Bitswits' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.secBtn}>
                            <a href="#href">
                            Let’s Discuss Your Game Project!
                            </a>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials
