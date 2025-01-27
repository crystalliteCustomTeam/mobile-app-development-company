"use client";
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/services/cuttingEdge.webp"
import styles from "@/styles/services/cuttingedge.module.scss"
import Image from "next/image"
import NormalBtn from "@/src/components/common/normalbtn"
import PopUp from "@/src/app/services/popup";
import { useState } from "react";

const Cuttingedge = ({ data, list }) => {

    // Chat Code
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.cuttingedgeSection} pt-100`} id="Services">
            <Container>
                <Row>
                    <Col lg={7} md={9}>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.ServicesBox}>
                            <div className={styles.ServicesContent}>

                                {list.map((item, index) => (
                                    <div className={styles.ServicesItem} key={index}>
                                        <div className={styles.titleBox}>
                                            <h5>{item.title}</h5>
                                            <div className={styles.normalButton}>
                                                <div className={styles.linksBtn} onClick={() => handleClick()}>Let’s Do This!</div>
                                            </div>
                                        </div>
                                        <div className={styles.contentBox}>
                                            <p>{item.txt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.ServicesSticky}>
                                <div className={styles.stickyBox}>
                                    <Image src={IMG.src} alt="Btiswits Services" width={355} height={294} />
                                    <h5>{data?.subtext}</h5>
                                    <NormalBtn text="Let’s Talk !" bgcolor="#fff" txtcolor="#4D77EE" />
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default Cuttingedge