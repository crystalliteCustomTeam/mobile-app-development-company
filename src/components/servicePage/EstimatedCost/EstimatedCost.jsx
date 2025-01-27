import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/EstimatedCost.module.css"
// Images 
import CardMobile from "media/services/cardMobile.svg"

const EstimatedCost = () => {
    return (
        <section className={styles.estimateSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='font-bold manrope text-black mb-3'>Estimated <span className='newfycolr'>3D Game Development </span> 
                            Costs by Platform Type</h2>
                            <p className='font16 font-medium text-black manrope mb-3 mb-lg-5 pb-xl-2'>Understanding the cost of developing a 3D game aids in better planning and budgeting. Below are estimated costs for different platforms, offering insights into the financial investment required from a 3D game developer's perspective.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>PC Games</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>$20K to $5 Million</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>The cost to build 3D games for PC ranges from $20K to $5M, influenced by complexity, scale, and duration. More expensive than mobile games but cheaper than console games, advanced graphics and complex mechanics raise expenses.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>Mobile</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>Cost Range: $10K to $600K</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>Creating a mobile game costs $10,000 to $50,000 for basic functionality. Advanced graphics and complex features can raise the cost to $600,000, offering budget flexibility based on features and quality.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>Console</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>$100K to Millions</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>The 3D game development cost for consoles starts at $100,000 and can reach millions for AAA titles. These games are complex, requiring large teams, making them more expensive than PC and mobile games.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <div className={styles.cardTwo}>
                            <div className="d-flex align-items-center h-100">
                                <div className={styles.cardDesc}>
                                    <h6 className='manrope font-bold text-white pt-5'>Calculate Your Game Cost</h6>
                                    <p className='mb-4 manrope font16 font-medium pe-2 text-white'>Estimate your game development cost by considering platform type, complexity, and features. Use our cost calculator for a detailed breakdown. Plan efficiently and realize your vision with our 3D game development services.</p>
                                    <div className={styles.cardBtn}>
                                        <a href="#href" className='manrope'>
                                            Let’s Do This!
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <Image src={CardMobile} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EstimatedCost
