import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectbanenr.module.scss"

const Banner = () => {
    return (
        <section className={`${styles.projectSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xl={8} lg={9} md={9} className="mx-auto mt-auto">
                        <h1>Our Apps in Action — A Portfolio of <span className="txtColor">Success Stories!</span></h1>
                        <p>Each app we build isn’t just a product — it’s a powerful tool that transforms businesses. From startups to enterprises, our portfolio showcases innovative solutions that exceed expectations and deliver measurable success in competitive markets.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner