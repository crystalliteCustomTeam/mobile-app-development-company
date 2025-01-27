import { Col, Container, Row } from "react-bootstrap";
import { CheckList } from "@/src/app/app-constants";
import styles from "@/styles/contact/contact.module.scss"
import ContactFrom from "@/src/components/common/contactfrom";

export default function Page() {
    return (
        <section className={styles.contactBanner}>
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <div className="subTitle txtColor">Let’s Build Something You’ll Love</div>
                        <h2>We’re the best at what we do, delivering top-notch app solutions tailored to your needs.</h2>
                        <ul className={styles.greenBullet}>
                            <li><CheckList />Scalable solutions</li>
                            <li><CheckList />Full Data Security.</li>
                            <li><CheckList />User-Friendliness</li>
                            <li><CheckList />Custom Development</li>
                            <li><CheckList />Future-Reay Technology</li>
                            <li><CheckList />Budget Friendly</li>
                            <li><CheckList />Support and Maintenance</li>
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="offset-lg-1">
                        <div className={styles.contactForm}>
                            <div className={`${styles.contactHeading} subTitle txtColor`}>Let’s Discuss Your App Idea</div>
                            <ContactFrom contactpage={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}

