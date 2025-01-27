"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/casestudy.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Case01 from "media/home/casestudy/Vifty.webp"
import Case02 from "media/home/casestudy/SoulScribe.webp"
import Case03 from "media/home/casestudy/ReadyApp.webp"
import Logo01 from "media/home/casestudy/ViftyLogo.webp"
import Logo02 from "media/home/casestudy/SoulScribeLogo.webp"
import Logo03 from "media/home/casestudy/ReadyAppLogo.webp"
import Image from "next/image"
import { ArrowIcon, ServiceArrow } from "@/src/app/app-constants";
import Link from "next/link";

const options = { align: 'start', loop: "true" }


const CaseStudy = ({ data }) => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.homeCaseStudy} commonSlider pt-100`}>
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
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    <div className={styles.embla__slide} >
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case01.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo01.src} alt="Case Study Name" width={336} height={336} />
                                                        <span>Vifty</span>
                                                    </div>
                                                    <div className={styles.casestudyPara}>
                                                        <p>BitsWits developed Vifty, a multi-functional platform allowing users to list gigs, book online consultations, and interact socially. The app includes reels, a booking module, rating and review systems, video calling, and one-to-one chat. Vifty also supports social posts and external sharing for enhanced user engagement.</p>
                                                        <ul>
                                                            <li>Gig Listings</li>
                                                            <li>Online Consultation</li>
                                                            <li>Reels</li>
                                                            <li>Rating & Reviews</li>
                                                            <li>Video Calls</li>
                                                            <li>Appointment</li>
                                                            <li>live Chat</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.btnSec}>
                                                    <div className="catButton">
                                                        <Link href="/case-studies/vifty"><span>View Case Study</span> <ArrowIcon /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.embla__slide} >
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case02.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo02.src} alt="Case Study Name" width={336} height={336} />
                                                        <span>SoulScribe</span>
                                                    </div>
                                                    <div className={styles.casestudyPara}>
                                                        <p>SoulScribe is a social media platform where users manage posts, maintain memory journals with beneficiaries, and connect with friends. BitsWits integrated features like search and filter, in-app messaging, group management, and social interactions, making it a comprehensive tool for personal journaling and building meaningful connections.</p>
                                                        <ul>
                                                            <li>Post Management</li>
                                                            <li>Memory Journal</li>
                                                            <li>Friends Management</li>
                                                            <li>In-App Messaging</li>
                                                            <li>Groups Management</li>
                                                            <li>Search & Filter</li>
                                                            <li>Beneficiary Addition</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.btnSec}>
                                                    <div className="catButton">
                                                        <Link href="/case-studies/soul-scribe"><span>View Case Study</span> <ArrowIcon /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={styles.embla__slide} >
                                        <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case03.src})` }}>
                                            <div className={styles.casestudyContent} >
                                                <div className={styles.casestudyTxt}>
                                                    <div className={styles.logoSec}>
                                                        <Image src={Logo03.src} alt="Case Study Name" width={336} height={336} />
                                                        <span>ReadyApp</span>
                                                    </div>
                                                    <div className={styles.casestudyPara}>
                                                        <p>ReadyApp, created by BitsWits, connects truck drivers with jobs and recruiters. Drivers can search and apply for jobs, manage profiles and documents, and connect with others. Recruiters can handle job postings and hiring processes, with features for profile management, notifications, and in-app messaging for seamless communication.</p>
                                                        <ul>
                                                            <li>Job Listings</li>
                                                            <li>Driver Profiles</li>
                                                            <li>Recruiter Profiles</li>
                                                            <li>Notifications</li>
                                                            <li>Search & Filter</li>
                                                            <li>In-App Messaging</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={styles.btnSec}>
                                                    <div className="catButton">
                                                        <Link href="/case-studies/readyapp"><span>View Case Study</span> <ArrowIcon /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="embla_container">
                                <div className="embla_prev" onClick={prevButtonHandler}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className="embla_next" onClick={nextButtonHandler}>
                                    <ServiceArrow direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudy