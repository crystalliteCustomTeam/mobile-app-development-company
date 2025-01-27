
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/process.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import PopUp from "@/src/app/services/popup";
import { useState } from "react";


const Process = ({ data, list }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.processSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.processBox}>
                            {list.map((item, index) => (
                                <div className={styles.processList} key={index}>
                                    <div className={styles.processIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.processContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.viewLinks}>
                                        <div onClick={() => handleClick()}>Let’s Discuss! <span className={styles.btnBox}><ServiceArrow /></span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default Process