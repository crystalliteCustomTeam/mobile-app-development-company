"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/keypoints.module.scss";
import BgImg from "@/public/about/abtBG.webp"

const keyPointsData = [
    {
        title: "Mission", content: (<>
            <p><strong>To empower disruptors and leaders alike, turning visionary ideas into digital realities that lead and define markets</strong></p>
            <p>BitsWits revolutionizes the tech ecosystem by demystifying complexity and supercharging business potential.Driven by Silicon Valley hustle and a hacker’s ethos, we push the boundaries of what’s possible with technology to create radical solutions that are both ingenious and indispensable. Our mission: to empower disruptors and leaders alike, turning visionary ideas into digital realities that lead and define markets.</p>
        </>)
    },
    {
        title: "Vision", content: (<>
            <p><strong>Powering Potential, Simplifying Success</strong></p>
            <p>A future where technology intuitively amplifies human potential.Our goal is to lead the transformation of industries worldwide, making advanced digital solutions as fundamental and effortless as electricity.We’re dedicated to pioneering interfaces and interactions that are as intuitive as they are revolutionary, propelling businesses and their people towards a smarter, more connected world.</p>
        </>)
    },
    {
        title: "Values", content: (<>
            <p><strong>Relentless Innovation:</strong> Pushing the boundaries of what’s possible in technology to continuously deliver groundbreaking solutions.</p>
            <p><strong>Simplicity at Core:</strong> Transforming complex challenges into intuitive, accessible technology.</p>
            <p><strong>Ethical Impact:</strong> Committed to responsible tech that benefits society and respects the environment.</p>
            <p><strong>Unwavering Quality:</strong> Pursuing excellence in every pixel and line of code to ensure superior performance and reliability.</p>
            <p><strong>Collaborative Spirit:</strong> Fostering partnerships and open dialogue to innovate, solve, and evolve together.</p>
        </>)
    }
];

const KeyPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${styles.aboutSection} pb-100`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.keypointsContainer}>
                            <div className={styles.keypointsTitle}>
                                <ul className={styles.keypointsListing}>
                                    {keyPointsData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${styles.listingItem} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                    {keyPointsData.map((item, index) => (
                                        <div className={`${styles.bgTxt} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                            {item.title}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.keypointsContent}>
                                {keyPointsData[activeIndex].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default KeyPoints;
