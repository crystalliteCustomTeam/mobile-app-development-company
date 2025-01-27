import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SmallBanner.module.css"
// Images
import ImageOne from "media/services/smallBannerImg.svg"
import Image from 'next/image'

const SmallBanner = () => {
    return (
        <section className={styles.SmallBannerSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center'>
                        <Col lg={6} className='p-0'>
                            <div className={styles.txt}>
                                <h2 className='manrope font-bold text-white'>
                                Hook Your Audience with Our Studio’s Optimized Games Across Any Genre!
                                </h2>
                                <p className='manrope font-medium font16 text-white'>Launch a glitch-free, full-cycle game with optimized UX and stunning graphics, developed by our expert game artists!</p>
                                <div className={styles.secBtn}>
                                    <a href="#href" className='manrope'>
                                    Let’s Connect!
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='d-lg-block d-none'>
                            <div className="secImg">
                                <Image src={ImageOne} alt='Bitswits' className='img-fluid ms-auto d-block' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default SmallBanner
