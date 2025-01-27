import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/result.module.scss"


const Results = ({ data, list }) => {
    return (
        <section className={`${styles.resultSection}`} style={{
            backgroundImage: data?.background
        }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={7} xl={7} lg={7} md={12} className="my-auto">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <div className={styles.resultBox}>
                            {list.map((item, index) => (
                                <div className={styles.resultTitle} key={index}>{item}</div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Results