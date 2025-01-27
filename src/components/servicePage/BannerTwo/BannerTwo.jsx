"use client"
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typing from 'react-typing-effect';
import styles from "@/styles/servicepage/Banner.module.css"
// Images 
import icon1 from "media/services/service-icon-1.png"
import icon2 from "media/services/service-icon-2.png"
import icon3 from "media/services/service-icon-3.png"
import icon4 from "media/services/service-icon-4.png"
import icon5 from "media/services/service-icon-5.png"
import icon6 from "media/services/service-icon-6.png"
import icon7 from "media/services/service-icon-7.png"
import icon8 from "media/services/service-icon-8.png"
import icon9 from "media/services/service-icon-9.png"
import icon10 from "media/services/service-icon-10.png"
import icon11 from "media/services/service-icon-11.png"
import icon12 from "media/services/service-icon-12.png"
import icon13 from "media/services/service-icon-13.png"
import icon14 from "media/services/service-icon-14.png"
import icon15 from "media/services/service-icon-15.png"
import icon16 from "media/services/service-icon-16.png"
import icon17 from "media/services/service-icon-17.png"
import icon18 from "media/services/service-icon-18.png"
import icon19 from "media/services/service-icon-19.png"
import icon20 from "media/services/service-icon-20.png"
import icon21 from "media/services/service-icon-21.png"
import Image from 'next/image';
const BannerTwo = () => {

    // Moving Icons Code 
    useEffect(() => {
        const bannerSection = document.querySelector(`.${styles.bannerSec}`);
        const moveLogos = document.querySelector(`.${styles.moveLogos}`);

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX / window.innerWidth) * 40 - 30; // Adjust movement range
            const moveY = (clientY / window.innerHeight) * 40 - 30; // Adjust movement range

            moveLogos.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        bannerSection.addEventListener('mousemove', handleMouseMove);

        return () => {
            bannerSection.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <section className={`${styles.bannerSec} ${styles.bannerTwo}`}>
            <div className="tools">
                <div className={styles.moveLogos}>
                    <div className={styles._rows1}>
                        <Image src={icon1} alt='Services' />
                        <Image src={icon2} alt='Services' />
                        <Image src={icon3} alt='Services' />
                        <Image src={icon4} alt='Services' />
                        <Image src={icon5} alt='Services' />
                    </div>
                    <div className={styles._rows2}>
                        <Image src={icon5} alt='Services' />
                        <Image src={icon6} alt='Services' />
                        <Image src={icon7} alt='Services' />
                        <Image src={icon8} alt='Services' />
                        <Image src={icon9} alt='Services' />
                        <Image src={icon21} alt='Services' />
                    </div>
                    <div className={styles._rows3}>
                        <Image src={icon10} alt='Services' />
                        <Image src={icon11} alt='Services' />
                        <Image src={icon12} alt='Services' />
                        <Image src={icon13} alt='Services' />
                        <Image src={icon14} alt='Services' />
                    </div>
                    <div className={styles._rows4}>
                        <Image src={icon15} alt='Services' />
                        <Image src={icon16} alt='Services' />
                        <Image src={icon17} alt='Services' />
                        <Image src={icon18} alt='Services' />
                        <Image src={icon19} alt='Services' />
                        <Image src={icon20} alt='Services' />
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <Typing
                                className={`mb-2 ${styles.firstPara} manrope fw200`}
                                text='Quickly – Efficiently – Effortlessly'
                                speed={100}
                                eraseDelay={200}
                                typingDelay={100}
                            />
                            <h1 className='text-white mb-3 mb-lg-4 manrope font-bold'>Empower Your Business With <br className='d-lg-block d-none' />
                                Top-Class Software Development</h1>
                            <p className='font16 text-white font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                We’re a software development company that ensures its expertise extends to offer a seamlessly productive <br className='d-lg-block d-none' /> and growth-oriented partnership to its client’s goals, and internal teams.
                            </p>
                            <div className="btn d-flex align-items-center justify-center gap-4 px-0">
                                <a href="#href" className={`${styles.demoBtn} font-bold manrope mx-auto`}>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerTwo
