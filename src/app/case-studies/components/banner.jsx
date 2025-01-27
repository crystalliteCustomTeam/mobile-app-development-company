import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/singleprojectbanner.module.scss"
import ButtonCommon from "@/src/components/common/button"

const Banner = ({ data }) => {
    return (
        <section className={`${styles.singleProject}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={6} lg={6} md={7} className="m-auto text-center">
                        <div className={styles.smallTxt}>{data?.subtitle}</div>
                        <h1>{data?.title}</h1>
                        <ButtonCommon txt="Book a Call" />
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner