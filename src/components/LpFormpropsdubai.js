import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
//
import styles from "@/styles/LpFormdubai.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LpFormpropsdubai = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            {props.data ?
                <section className={styles.datapost}>
                    <Container className={styles.appios}>
                        {isMobile ? (
                            <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                {props.data.map((item, index) => (
                                    <div className='mt-5 mt-md-0'>
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <Row className='gx-3 gy-3'>
                                {props.data.map((item, index) => (
                                    <Col lg={3}>
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Container>
                </section>
                :
                ''
            }
            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.para}>
                        <p className='mb-0'>
                            {props.heading}
                        </p>
                    </div>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpFormpropsdubai
