
"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/website-development-services/testimonial.module.scss"
import  { StarIconWhite, TrustpilotLogoWhite, ClutchLogoWhite, GoogletLogoWhite} from "@/src/app/app-constants"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const Testimonial = ({ data, list }) => {
    const options = { loop: false }
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false, topOnInteraction: false, delay: 2000, })
    ])
    return (
        <section className={`${styles.testimonialSection} pt-100`} id="testimonial">
            <Container className="h-100">
                <Row className="h-100 ">
                    <Col sm={6} lg={5} className={styles.bgBlackBox}>
                        <div className={styles.contentBox}>
                            <div className="subTitle txtColor">{data?.subtitle}</div>
                            <h2>{data?.title}</h2>
                            <p>{data?.content}</p>

                            <div className={styles.imagesBox}>
                                <div className={styles.imgShell}>
                                    <TrustpilotLogoWhite />
                                    <div className={styles.imgShellText}>Rating 4.8</div>
                                </div>
                                <div className={styles.imgShell}>
                                    <ClutchLogoWhite />
                                    <div className={styles.imgShellText}>Rating 4.7</div>
                                </div>
                                <div className={styles.imgShell}>
                                    <GoogletLogoWhite />
                                    <div className={styles.imgShellText}>Rating 4.9</div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {list.map((tab, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.testimonialItems}>
                                              <div className={styles.testimonialTxt}>
                                                    <p><span>“</span>{tab?.text}<span>”</span></p>
                                                </div>
                                                <div className={styles.testimonialInfo}>
                                                    <div className={styles.nameInfo}>{tab?.namee}</div>
                                                    <div className={styles.designationInfo}>{tab?.designation}</div>
                                                    <div className={styles.rate}>
                                                        <StarIconWhite />  4.9
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Testimonial