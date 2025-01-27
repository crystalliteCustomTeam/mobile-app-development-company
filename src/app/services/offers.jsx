"use client"
import { useState } from "react";
import styles from "@/styles/services/offers.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";



const Offers = ({ bg, tabs, data }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`${styles.offerSection} pt-100 ${bg ? 'bgBlack' : 'bgLight'}`}>
            <Container>
                <Row>
                    <Col xxl={8} xl={7} lg={10} md={12}>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabVertical}>
                            <div className={styles.tabTitle}>
                                <ul>
                                    {tabs.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={index === activeTab ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span className={styles.count}>0{index + 1}</span><span className={styles.title}>{tab.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabContent}>
                                <h4>{tabs[activeTab].content.heading}</h4>
                                <p>{tabs[activeTab].content.description}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Offers