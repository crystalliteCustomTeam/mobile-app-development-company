
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/overview.module.scss"
import Image from "next/image"
import { CheckList } from "@/src/app/app-constants"

const Solution = ({ data, list }) => {
    return (
        <section className={`${styles.singleProjectContent} p-100`}>
            <Container>
                <Row>

                    <Col lg={5} md={6} className="my-auto ">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <ul className={styles.greenBullet}>
                            {list.map((item, index) => (
                                <li key={index}><CheckList />{item}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className={`my-auto offset-lg-1 ${styles.mockupImg}`}>
                        <Image src={data?.image} alt="Social Networking App" width={1353} height={1486} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution