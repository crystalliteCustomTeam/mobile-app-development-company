import styles from "@/styles/services/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"
import ContactFrom from "@/src/components/common/contactfrom"


const Banner = ({ data }) => {
    return (
        <section className={`${styles.bannerSection} pt-140`} style={{ backgroundImage: `url(${data.BanngBg})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.subTitle}>{data.subtitle}</div>
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <div className={styles.bannerLogos}>
                            <Image src={data.BannerLogos} alt="Bitswits Services" width={528} height={50} />
                        </div>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.bannerFrom}>
                            <h4>{data.fromtitle}</h4>
                            <p>{data.fromtext}</p>
                            <ContactFrom />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner