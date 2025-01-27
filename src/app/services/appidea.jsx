import styles from "@/styles/services/appidea.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/services/BitsWitsImg.webp"
import ContactFrom from "@/src/components/common/contactfrom"


const AppIdea = ({ data }) => {

    return (
        <section className={`${styles.appideaSection} p-50`}>
            <Container>
                <Row>
                    <Col lg={6} md={6} className="order-md-1 order-2">
                        <div className={styles.imgBox}>
                            <Image src={IMG.src} alt="Bitswits Services" width={680} height={744} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="order-md-2 order-1">
                        <h2>{data.title}</h2>
                        <p>{data?.text}</p>
                        <div className={styles.appIdeaFrom}>
                            <ContactFrom idea={true} />
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </section>
    )
}

export default AppIdea