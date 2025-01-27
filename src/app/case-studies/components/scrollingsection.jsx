import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/scrollingsection.module.scss"
import Image from "next/image"

const ScrollingSection = ({data}) => {
    return (
        <section className={`${styles.scrollingSection}`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.scrollingImg}>
                            <Image src={data?.image} alt="Bitswits Scrolling Image" width={1314} height={4292} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ScrollingSection