import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/casesutdycta.module.scss"
import ButtonCommon from "@/src/components/common/button"
import BgImg from "media/casestudies/CaseStudyCTA.webp"

const CaseStudycta = ({ data }) => {
    return (
        <section className={`${styles.casesutdyCta}`} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="m-auto">
                        <div className={styles.casesutdyBG} style={{ backgroundImage: `url(${BgImg.src})` }}>
                            <div className={styles.casesutdyTitle}>
                                <h2>{data?.title}</h2>
                                <p>{data?.content}</p>
                            </div>
                            <div className={styles.casesutdyBtn}>
                                <ButtonCommon txt="Book a Call" color="white" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudycta