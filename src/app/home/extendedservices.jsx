
"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/extendedservices.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import { useState } from "react";
import PopUp from "@/src/app/services/popup";


const ExtendedServices = ({ data, list }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.extendedServices} p-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.verticalTabsWrapper}>
                            <div className={styles.verticalTabs}>
                                <ul>
                                    {list.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.verticalContent}>
                                {list.map((tab, index) => (
                                    activeTab === index && (
                                        <div key={index} className={styles.boxTxt}>
                                            <div className={styles.svgIcon}>
                                                {tab.content.icon}
                                            </div>
                                            <h2>{tab.content.heading}</h2>
                                            <p>{tab.content.description}</p>
                                            <ul>
                                                {tab.content.listItems.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                            <div className={styles.btnSmall}>
                                                <div onClick={() => handleClick()}>
                                                    <ServiceArrow />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default ExtendedServices