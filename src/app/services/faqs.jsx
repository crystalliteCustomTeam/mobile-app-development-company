"use client"
import { useState } from 'react';
import styles from '@/styles/services/faqs.module.scss';
import { Col, Container, Row } from "react-bootstrap";
import { FaqsArrows } from '../app-constants';




const Faqs = ({data, list}) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={8} md={12} className='m-auto'>
                        <h2 className='text-center'>{data?.title}</h2>
                        {list.map((item, index) => (
                            <div
                                className={`${styles.faqsBox} ${openIndex === index ? styles.active : ''}`}
                                key={index}
                            >
                                <div
                                    className={styles.faqsItem}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className={styles.faqstitle}>
                                        <span> {index >= 9 ? null : 0}{index + 1}.</span>{item.title} <span className={styles.arrowStyle}><FaqsArrows /></span>
                                    </div>
                                    {openIndex === index && (
                                        <div className={styles.faqsContent}>
                                            {item.txt}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
