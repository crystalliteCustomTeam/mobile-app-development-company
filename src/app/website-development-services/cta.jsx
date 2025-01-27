import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/website-development-services/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ctaImg from 'media/website-development-services/cta/cta-img.webp'
import Image from "next/image"

export const data = {
    subTitle: "A Glimpse Of What's About To Come",
    title: "At BitsWits!",
    text: "Let Our eCommerce Website Developers Can Develop Your Online Store From Scratch By Working On These Top Platforms.",
}

const Cta = () => {
    return (
        <section className={`${styles.Cta} p-100`} >
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.Sec}>
                            <div className={styles.Content}>
                                <h4>{data?.subTitle}</h4>
                                <h2>{data?.title}</h2>
                                <p>{data?.text}</p>
                                <ButtonCommon txt="Free Consultation" color={true} />
                            </div>
                            <div className={styles.imgBox}>
                                <Image src={ctaImg} />
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cta