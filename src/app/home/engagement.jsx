
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/engagement.module.scss"
import { useState } from "react";
import PopUp from "@/src/app/services/popup";


const Engagement = ({ data, listDetail, list }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`${styles.engagementSolution} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="my-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.engagementBox}>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>

                                </div>
                                <div className={styles.mainItemList}>
                                    {listDetail.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                </div>
                                <div className={styles.mainButtton}>

                                </div>
                            </div>
                            {list.map((item, index) => (
                                <div className={styles.engagementItem} key={index}>
                                    <div className={styles.mainTitle}>
                                        {item?.logo}
                                        <h6>{item?.title}</h6>
                                    </div>
                                    <div className={styles.mainItemList}>
                                        {item.detail.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </div>
                                    <div className={styles.mainButtton}>
                                        <div onClick={() => handleClick()} >Let’s Discuss!</div>
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

export default Engagement