"use client"
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/story.module.scss";

const data = [
    {
        title: "Years of Experience",
        points: "10+",
    },
    {
        title: "Successful Projects",
        points: "1,200+",
    },
    {
        title: "Experts",
        points: "60+",
    },
    {
        title: "Global Clients",
        points: "100+",
    }
];

const Story = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${styles.storySection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="subTitle txtColor">Our Story</div>
                        <h2>From Global Frustration to Local Solutions</h2>
                        <p>In the early days, before BitsWits became a name synonymous with digital innovation, our founders scattered across different countries were individually grappling with a universal issue in tech: the cumbersome complexity of digital tools which often hindered more than helped. Each had witnessed firsthand the frustration of businesses struggling to harness the power of technology to enhance their operations.</p>
                    </Col>
                    <Col lg={6} md={6} className="my-auto offset-lg-1">
                        <div className={styles.storyPoints}>
                            {data.map((item, index) => (
                                <div
                                    className={`${styles.storyItem} ${index === activeIndex ? styles.active : ""}`}
                                    key={index}
                                >
                                    {item.points}
                                    <div className={styles.storyTxt}>{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Story;
