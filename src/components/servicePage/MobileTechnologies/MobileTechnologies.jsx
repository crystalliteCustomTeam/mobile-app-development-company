import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/MobileTechnologies.module.css"
// Images 
import Icon1 from "media/services/icon-1.svg"
import Icon2 from "media/services/icon-2.svg"
import Icon3 from "media/services/icon-3.svg"
import Icon4 from "media/services/icon-4.svg"
import Icon5 from "media/services/icon-5.svg"
import Icon6 from "media/services/icon-6.svg"
import Icon7 from "media/services/icon-7.svg"
import Icon8 from "media/services/icon-8.svg"
import TachnoImg from "media/services/technoImg.svg"

const MobileTechnologies = () => {
    return (
        <section className={styles.technologiesSec}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7}>
                        <div className={styles.txt}>
                            <h2 className='manrope font-bold mb-3'>The Benefits When You Hire A 3D Game Development Company</h2>
                            <p className='font16 manrope font-medium my-3'>When you hire a top-grade 3D game development company in USA, you benefit from customized full-cycle development, ensuring every aspect of your game is expertly created. Flexible team selection allows you to choose the best 3D game developers tailored to your project’s needs. Utilizing cutting-edge technology, these companies create standout experiences, boasting a 90% player satisfaction rate and over 20 million downloads in stores.</p>
                        </div>
                        <div className={styles.services}>
                            <div className={styles.service}>
                                <Image src={Icon1} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>iOS</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon2} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>Android</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon3} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>Flutter</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon4} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>Kotlin</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon5} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>Objective C</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon6} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>ionic</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon7} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>React Native</p>
                            </div>
                            <div className={styles.service}>
                                <Image src={Icon8} alt='Bitswits' className='img-fluid' />
                                <p className='font16 manrope mb-0'>Swift</p>
                            </div>
                        </div>
                        <div className={styles.serviBtn}>
                            <a href="#href">
                                Let’s Discuss Your Project
                            </a>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className={`d-md-block d-none ${styles.secImage}`}>
                            <Image src={TachnoImg} alt='Bitswits' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MobileTechnologies
