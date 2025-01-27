
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/solutions.module.scss"
import PopUp from "@/src/app/services/popup";
import { ServiceArrow } from "@/src/app/app-constants"
import { useState } from "react";


const Solutions = ({ data, list }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.solutionsSection} p-100`}>
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
                <Row className={styles.solutoinmainBox}>
                    {list.map((item, index) => (
                        <Col lg={3} md={4} key={index}>
                            <div className={styles.solutoinBox}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.Link} onClick={() => handleClick()}>
                                    <span className={styles.btnBox}><ServiceArrow /></span>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default Solutions