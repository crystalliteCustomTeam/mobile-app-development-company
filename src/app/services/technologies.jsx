import styles from "@/styles/services/technologies.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"


import ButtonCommon from "@/src/components/common/button"

const Technologies = ({ data, list }) => {
    return (
        <section className={`${styles.technologiesSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={12} className="my-auto">
                        <h2>{data?.title}</h2>
                        {data?.text}
                        <div className={styles.techSec}>
                            {list.map((item, index) => (
                                <div className={styles.techIcon} key={index}>
                                    <div className={styles.iconBox}>
                                        <Image src={item.icons} alt="Icon Box" width={50} height={50} />
                                    </div>
                                    <div className={styles.iconTitle}>
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ButtonCommon txt="Free Consultation" />
                    </Col>
                    <Col lg={4} md={12} className="my-auto offset-lg-1">
                        <Image src={data?.TechImg} alt="TechImg Box" width={500} height={743} className={styles.ImgPhone} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Technologies