import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/features.module.scss"
import Image from "next/image"


const Features = ({ data, list }) => {
    return (
        <section className={`${styles.featuresSection}`}>
            <Container className={styles.featuresBG}>
                <Row>
                    <Col lg={5} md={6} className="my-auto text-center order-2 order-md-1">
                        <div className={styles.gradientBox}
                            style={{
                                background: data?.background,
                                boxShadow: data?.boxShadow
                            }}>
                            <Image src={data?.image} alt="Social Networking App" width={325} height={250} />
                        </div>

                    </Col>
                    <Col lg={6} md={6} className="offset-lg-1 my-auto  order-1 order-md-2">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <ul className={styles.featureBullets}>
                            {list.map((item, index) => (
                                <li key={index}><span className="txtColor"> {index < 9 && 0}{index + 1} </span>{item}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Features