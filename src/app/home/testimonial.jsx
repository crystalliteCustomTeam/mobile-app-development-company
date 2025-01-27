
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/testimonial.module.scss"
import { FiveStarIcon, ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const Testimonial = ({ data, list }) => {
    const options = { loop: false }
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false, topOnInteraction: false, delay: 2000, })
    ])
    return (
        <section className={`${styles.testimonialSection} pt-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    <div className={styles.embla__slide} >
                                        <div className={styles.testimonialItems}>
                                            <div className={styles.ratingBox}>
                                                <div className={styles.rating}>4.5</div>
                                                <FiveStarIcon />
                                                <div className={styles.reviews}>23 Reviews</div>
                                            </div>
                                            <div className={styles.imagesBox}>
                                                <div className={styles.imgShell}>
                                                    <ClutchLogo />
                                                </div>
                                                <div className={styles.imgShell}>
                                                    <GoogleLogo />
                                                </div>
                                                <div className={styles.imgShell}>
                                                    <TrustpilotLogo />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {list.map((tab, index) => ( 
                                        <div className={styles.embla__slide} key={index}>
                                        <div className={styles.testimonialItems}>
                                            <div className={styles.testimonialImage}>
                                                {tab?.logo}
                                            </div>
                                            <div className={styles.testimonialTxt}>
                                                <p><span>“</span>{tab?.text}<span>”</span></p>
                                            </div>
                                            <div className={styles.testimonialInfo}>
                                                <div className={styles.nameInfo}>{tab?.name}</div>
                                                <div className={styles.designationInfo}>{tab?.designation}</div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Testimonial