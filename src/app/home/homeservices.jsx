import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/homeservices.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import Link from "next/link"



const HomeServices = ({ data, list }) => {
    return (
        <section className={`${styles.homeServices} p-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="my-auto offset-lg-1">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.serviceBox}>
                            {list?.map((item, index) => (
                                <div className={styles.serviceItem} key={index}>
                                    <div className={styles.leftTxt}>
                                        <h4>{item.title}</h4>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.rightTxt}>
                                        <div className={styles.viewNumber}>
                                            0{index + 1}
                                        </div>
                                        <div className={styles.viewLinks}>
                                            <Link href={item?.url}>View Service <span className={styles.btnBox}><ServiceArrow /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeServices