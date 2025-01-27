"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/website-development-services/faqs.module.scss";
import { PlusFaqIcon, MinusFaqIcon } from "@/src/app/app-constants";



const Faqs = ({ data, list }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col xl={5} lg={5} md={5}>
                    <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                    </Col>
                    <Col xl={6} lg={7} md={7} className="offset-xl-1">
                        {list.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={`${styles.faqsTitle} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title} {activeIndex === index ? <MinusFaqIcon /> : <PlusFaqIcon />}
                                </div>
                                <div className={`${styles.faqscontent} ${activeIndex === index ? styles.active : ""}`}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;
