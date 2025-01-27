import styles from "@/styles/services/cat.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";
import Image from "next/image";


const CtaEstimated = ({ data }) => {
    return (
        <section className={`${styles.catSection} pb-100 bgBlack`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        <div className={styles.catVertical}>
                            <div className={styles.ctaContent}>
                                <div className={styles.subTitle}>
                                    {data?.subtitle}
                                </div>
                                <div className={styles.mainTitle}>
                                    {data?.title}
                                </div>
                                <p>{data?.text}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                            <div className={styles.ctaImg}>
                                <Image src={data?.CtaEstimatedImg} alt="Bitswits Services" fill />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaEstimated