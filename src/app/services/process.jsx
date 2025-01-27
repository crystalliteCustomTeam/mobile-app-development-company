"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/process.module.scss";
import ButtonCommon from "@/src/components/common/button";
import Image from "next/image";



const Process = ({ data, tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.processSection} p-50`} id="Process">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto">
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
                                <div className={styles.txtTitle}>
                                    <h4>{tabs[activeTab].content.heading}</h4>
                                    <p>{tabs[activeTab].content.description}</p>
                                    <ButtonCommon txt="Free Consultation" />
                                </div>
                                <div className={styles.txtImg}>
                                    <Image
                                        alt="bitswits Servcies"
                                        src={tabs[activeTab].content.imgSrc}
                                        height={405}
                                        width={622}

                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Process;
