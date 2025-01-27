"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/CaseStudySection.module.css"
//========= Images 
import store from "media/newmobileapp/store.png"
import slider1 from "media/newmobileapp/slider-2.png"
import slider2 from "media/newmobileapp/slider-3.png"
import slider3 from "media/newmobileapp/slider-5.png"
import slider4 from "media/newmobileapp/slider-4.png"
import slider5 from "media/newmobileapp/slider-1.png"
import arrow from "media/newmobileapp/arrow.png"

const CaseStudySection = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handleBtnLeftClick = () => {
        setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : 4));
    };

    const handleBtnRightClick = () => {
        setActiveTab((prevTab) => (prevTab < 4 ? prevTab + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab < 4 ? prevTab + 1 : 0));
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={styles.appStyles}>
                <div className="container">
                    <div className="text-center">
                        <h2>Our Clients <span>Trust Us</span></h2>
                        <p>We develop amazing first-rate iOS, Android, and web applications and <br className='d-none d-md-block' /> superior Windows and OS X solutions.</p>
                    </div>
                    <div className="tabs">
                        <Row className={styles.tabList}>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 0 ? styles.active : ''}`} onClick={() => handleTabChange(0)}>The Practice Pen</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 1 ? styles.active : ''}`} onClick={() => handleTabChange(1)}>Soul Scribe</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 2 ? styles.active : ''}`} onClick={() => handleTabChange(2)}>Crave Cuisine</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 3 ? styles.active : ''}`} onClick={() => handleTabChange(3)}>Fitnow</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 4 ? styles.active : ''}`} onClick={() => handleTabChange(4)}>Route Rover</Col>
                        </Row>
                    </div>
                    <div className="tabsContent">
                        {activeTab == 0 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <h3>The Practice Pen</h3>
                                            <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <Link href="#">
                                                    View Case Study
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>73</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>13</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>61</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div>
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">01</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider1} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 1 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Soul Scribe</h3>
                                            <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <Link href="/social-app-development-case-study">
                                                    View Case Study
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>73</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>13</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>61</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div>
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">02</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider2} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 2 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Crave Cuisine</h3>
                                            <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <Link href="/food-delivery-app-development-case-study">
                                                    View Case Study
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>73</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>13</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>61</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div>
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">03</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider3} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 3 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Fitnow</h3>
                                            <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <Link href="/fitness-app-development-case-study">
                                                    View Case Study
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>73</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>13</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>61</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div>
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">04</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider4} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 4 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Route Rover</h3>
                                            <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <Link href="#">
                                                    View Case Study
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>73</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>13</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>61</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div>
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">05</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider5} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudySection
