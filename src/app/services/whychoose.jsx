import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/services/whychoose.module.scss"
import { Col, Container, Row } from "react-bootstrap"


const WhyChoose = ({ data, list1, list2 }) => {
    return (
        <section className={`${styles.whychooseSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={5} md={12} className="my-auto">
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                        <ButtonCommon txt="Free Consultation" />
                    </Col>
                    <Col lg={3} md={6} className="my-auto offset-lg-1 mt-md-0 mt-4 ">
                        <div className={styles.whyBox}>
                            {list1.map((item, index) => (
                                <div className={styles.whyItem} key={index}>
                                    <div className={styles.whyTitle}>
                                        <div className={styles.whyIcon}>{item?.Icon}</div>
                                        <div className={styles.whyHeading}>
                                            {item?.title}
                                        </div>
                                    </div>
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={3} md={6} className={styles.whyBoxMargin}>
                        <div className={styles.whyBox}>
                            {list2.map((item, index) => (
                                <div className={styles.whyItem} key={index}>
                                    <div className={styles.whyTitle}>
                                        <div className={styles.whyIcon}>{item?.Icon}</div>
                                        <div className={styles.whyHeading}>
                                            {item?.title}
                                        </div>
                                    </div>
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose