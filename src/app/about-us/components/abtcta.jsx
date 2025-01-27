import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/abtcta.module.scss";
import BgImg from "@/public/about/bgCTA.webp"
import ButtonCommon from "@/src/components/common/button";

const AbtCta = () => {
    return (
        <section className={`${styles.abtctaSection}`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={12} className="text-center m-auto">
                        <h2>One Call Can Change
                            <div className={styles.extraFonts}>Everything For Your Business</div>
                        </h2>
                        <ButtonCommon txt="Lets Discuss!" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AbtCta