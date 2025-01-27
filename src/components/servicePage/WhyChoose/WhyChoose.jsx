"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/WhyChoose.module.css"
import Slider from 'react-slick'

const WhyChoose = () => {
    const whychooseSlider = {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className={styles.whychooseSec}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="txt">
                            <h2 className='font-bold text-black manrope mb-md-3'>Why<span className='newfycolr'> Choose</span> BitsWits?</h2>
                            <p className='font16 text-black font-medium manrope mb-3'>Our comprehensive project management ensures high quality, transparency, and scalability. Here’s why you should choose BitsWits for your game development needs:</p>
                            <div className={styles.secBtn}>
                                <a href="#href">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Slider {...whychooseSlider} className={`whychooseSlider ${styles.whychooseSlider}`}>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>On-Time <br className='d-xl-block d-none' /> Delivery</h3>
                                    <p className='manrope font-medium font16 pe-2'>As a leading 3D game development company, we promise timely delivery, ensuring your game hits the market without delays.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Expertise of 250+
                                        <br className='d-xl-block d-none' />
                                        Professionals</h3>
                                    <p className='manrope font-medium font16 pe-2'>We have a team of 250+ skilled 3D game developers with expertise in game engines like Unity, Unreal Engine, Phaser, and Maya.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Client-First 
                                        <br className='d-xl-block d-none' />
                                        Approach</h3>
                                    <p className='manrope font-medium font16 pe-2'>We follow an agile process with a client-first approach, adapting to your needs and prioritizing your vision.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Streamlined Project <br className='d-xl-block d-none' /> Management</h3>
                                    <p className='manrope font-medium font16 pe-2'>Our 3D game development services offer streamlined project management, ensuring end-to-end transparency to keep you informed at every stage.</p>
                                </div>
                            </div>
                            <div className='px-1'>
                                <div className={`card border-0 ${styles.card}`}>
                                    <h3 className='font-bold manrope'>Consistent <br className='d-xl-block d-none' /> Support</h3>
                                    <p className='manrope font-medium font16 pe-2'>We offer a holistic approach to 3D game development, providing consistent testing and support for a flawless gaming experience.</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose
