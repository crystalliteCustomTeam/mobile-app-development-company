
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/overview.module.scss"
import Image from "next/image"
import { CheckList } from "@/src/app/app-constants"

const Problem = ({ data, list }) => {
    return (
        <section className={`${styles.singleProjectContent} p-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={6} className={`${styles.mockupImg} my-auto order-2 order-md-1`}>
                        <Image src={data?.image} alt="Social Networking App" width={1353} height={1486} />
                    </Col>
                    <Col lg={5} md={6} className="my-auto offset-lg-1 order-1 order-md-2">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <ul className={styles.greenBullet}>
                            {list.map((item, index) => (
                                <li key={index}><CheckList />{item}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Problem