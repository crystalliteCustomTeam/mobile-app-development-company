"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/techstack.module.scss";
import Image from "next/image";




const TechStack = ({ data, tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.stackSection} pt-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={12} className="text-center m-auto">
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
                            {tabs[activeTab].content.map((item, index) => (
                                <div className={styles.tabtxtBox} key={index}>
                                    <div className={styles.txtImg}>
                                        <Image
                                            src={item.img}
                                            alt={item.heading}
                                            height={80}
                                            width={80}
                                        />
                                    </div>
                                    <div className={styles.txtTitle}>
                                        {item.heading}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TechStack;
