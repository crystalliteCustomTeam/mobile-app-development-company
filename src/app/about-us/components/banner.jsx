import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectbanenr.module.scss"
import ButtonCommon from "@/src/components/common/button"

const Banner = () => {
    return (
        <section className={`${styles.projectSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={10} className="mx-auto mt-auto text-center">
                        <h1>About <span className="txtColor">BitsWits!</span></h1>
                        <p>Dedicated to crafting digital solutions that simplify complexities and enhance efficiency. Born from a global collaboration of tech enthusiasts, our mission is to transform your biggest challenges into your greatest assets using cutting-edge technology. We specialize in developing intuitive mobile and web applications that not only meet today’s needs but also anticipate tomorrow’s opportunities.</p>
                        <ButtonCommon txt="Get an Idea!" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner