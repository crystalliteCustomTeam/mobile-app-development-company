"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SuccessfulApp.module.css"
// Images 
import Success1 from "media/services/success-1.svg"
import Success2 from "media/services/success-2.svg"
import Success3 from "media/services/success-3.svg"
import Success4 from "media/services/success-4.svg"
import Success5 from "media/services/success-5.svg"

const SuccessfulApp = () => {
    const [progress, setProgress] = useState(2);
    const sliderRef = useRef(null);
    // const successfulSlider = {
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     speed: 200,
    //     responsive: [
    //         {
    //             breakpoint: 1099,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ],
    //     beforeChange: (current, next) => {
    //         const calc = ((next) / (sliderRef.current.props.children.length - 1)) * 100;
    //         setProgress(calc);
    //     }
    // };

    return (
        <section className={styles.successfulSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center text-black manrope font-bold mb-3'>Our Success Stories in the<span className='newfycolr'>3D Game Development </span>World!</h2>
                            <p className='font16 text-black font-medium text-center manrope mb-5 pb-md-2'>Take a look at our transformative projects that showcase business growth through innovative 3D games. These success stories highlight <br className='d-lg-block d-none' /> our impact on the gaming industry with increased revenue and happy clients!</p>
                        </div>
                    </Col>
                </Row>
                <div className="div">
                    <div className={`${styles.successfulSlider} successfulSlider`}>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success1} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.titleDesc}>
                                    <h3 className='font-bold manrope'>DragonQuest Legends</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>Our talented 3D game designers created "DragonQuest Legends," a mobile game with stunning 3D graphics, seamless gameplay, and engaging storylines, boosting player retention by 50%.</p>
                                    </div>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>01/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success2} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Space Odyssey</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>Developed "Space Odyssey," a VR game featuring hyper realistic environments and intuitive controls, resulting in a 60% increase in user engagement.</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>02/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success3} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Warriors of the Realm</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>Delivered "Warriors of the Realm," a console game with intricate character designs and expansive worlds, driving a 40% rise in sales within three months.</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>03/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success4} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Mystic Lands</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>Produced "Mystic Lands," a PC game with exceptional UI/UX design and responsive interfaces, enhancing user satisfaction and achieving a 45% revenue growth.</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>04/</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success5} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Crave Cuisine</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>05/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success1} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.titleDesc}>
                                    <h3 className='font-bold manrope'>The Practice Pen App</h3>
                                    <div className={styles.hoverTxt}>
                                        <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                    </div>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>01/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success2} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Fitnow App</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>02/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success3} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Music App</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>03/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success4} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Soul Scribe</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>04/</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <div className={styles.imageOne}>
                                    <Image src={Success5} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className='font-bold manrope'>Crave Cuisine</h3>
                                <div className={styles.hoverTxt}>
                                    <p className='manrope font-medium'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app</p>
                                </div>
                                <div className={styles.cardBtn}>
                                    <a href="#href" className='manrope'>
                                        View Full Casestudy
                                    </a>
                                </div>
                                <div className={styles.sliderNumber}>
                                    <p className='font-bold manrope'>05/</p>
                                </div>
                            </div>
                        </div> */}
                    </div> 
                </div>
            </Container>
        </section>
    )
}

export default SuccessfulApp
