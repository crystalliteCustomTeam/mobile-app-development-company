import ButtonCommon from "@/src/components/common/button"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Head from "next/head"

const Banner = ({ data }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/videos/bannerVideo.mp4" as="video" type="video/mp4" />
            </Head>
            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={8} md={9} className="my-auto">
                            <div className={styles.bannerContent}>
                                <h1>{data?.title}</h1>
                                <p>{data?.content}</p>
                                <ButtonCommon txt="Let’s Discuss!" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-label="Background video"
                    className={styles.bannerVideo}
                    loading="eager"
                >
                    <source src="/videos/bannerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </>
    )
}

export default Banner