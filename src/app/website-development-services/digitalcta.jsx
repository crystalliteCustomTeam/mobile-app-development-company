import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/website-development-services/digitalcta.module.scss"
import ButtonCommon from "@/src/components/common/button"

const DigitalCta = ({data}) => {
    return (
        <section className={`${styles.digitalSection}  p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={12} md={12} className="my-auto" >
                        <div className={styles.digitalContent}>
                            {data?.content}
                            {/* <span>Transform<br />Your</span>Digital */}
                        </div>
                        <div className={styles.digitalAnimatedBox}>
                            <div className={styles.digitalAnimatedTxt}>
                                <span>Presence</span>
                                <span>Strategy</span>
                                <span>Impact</span>
                                <span>Results</span>
                            </div>
                            <ButtonCommon txt="Free consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.digitalVideo}>
                <source src='/videos/digitalVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default DigitalCta