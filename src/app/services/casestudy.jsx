"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from "@/styles/services/casestudy.module.scss";
//========= Images
import store from "media/newmobileapp/store.png";
import arrow from "media/newmobileapp/arrow.png";
import PopUp from './popup';

const CaseStudySection = ({ data, caseStudies }) => {

    const [activeTab, setActiveTab] = useState(0);
    // Chat Code
    const [modalShow, setModalShow] = useState(false);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    const handleBtnLeftClick = () => {
        setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : caseStudies.length - 1));
    };
    const handleBtnRightClick = () => {
        setActiveTab((prevTab) => (prevTab < caseStudies.length - 1 ? prevTab + 1 : 0));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab < caseStudies.length - 1 ? prevTab + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [caseStudies.length]);
    // Chat Code
    const handleChatOpen = () => {
        setModalShow(true);
    };
    return (
        <>
            <section className={styles.appStyles} id="Casestudies">
                <div className="container">
                    <Row>
                        <Col lg={8} md={12} className='text-center m-auto'>
                            <h2>{data?.title}</h2>
                            <p>{data?.text}</p>
                        </Col>
                    </Row>
                    <div className="tabs">
                        <Row className={styles.tabList}>
                            {caseStudies.map((study, index) => (
                                <Col
                                    key={index}
                                    sm={4}
                                    lg={2}
                                    className={`${styles.lists} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {study.title}
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="tabsContent">
                        {caseStudies[activeTab] && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Arrow Left' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Arrow Right' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>{caseStudies[activeTab].title}</h3>
                                            <p>{caseStudies[activeTab].description}</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Store' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={() => handleChatOpen()}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">{String(activeTab + 1).padStart(2, '0')}</span>
                                                <span className='text-white'>/</span>
                                                <span>{String(caseStudies.length).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Arrow Left' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Arrow Right' className='img-fluid' />
                                            </button>
                                        </div>
                                        {caseStudies[activeTab].sliderImages.map((img, idx) => (
                                            <Image
                                                key={idx}
                                                src={img}
                                                alt={`Slider Image ${idx + 1}`}
                                                fill={true}
                                                className='img-fluid'
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </div>
            </section>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};
export default CaseStudySection;