import styles from "@/styles/services/testimonial.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import TestimonialSlider from "@/src/components/services/testimonialslider";

const OPTIONS = { loop: true, duration: 30 }

const Testimonial = ({data, list}) => {
    return (
        <section className={`${styles.reviewsSection} p-100`} id="Testimonials">
            <Container>
                <Row>
                    <Col lg={5} md={6}>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className={styles.reviewsBox}>
                            <Image src={data?.TestiImg1} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={data?.TestiImg2} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={data?.TestiImg3} alt="Bitswits Reviews" width={145} height={65} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} md={10} className="m-auto">
                        <TestimonialSlider slides={list} options={OPTIONS} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial