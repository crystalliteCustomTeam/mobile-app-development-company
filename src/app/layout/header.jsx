
"use client"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { MainLogo, WhiteLogo } from "@/src/app/app-constants"
import Navigation from "@/src/app/layout/navigation"
import styles from "@/styles/layout/header.module.scss"
import { useState, useEffect } from "react";


const Header = ({ isDarkHeader, isLightHeader }) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`} >
            < Container className="h-100" >
                <Row className="h-100">
                    <Col md={3} xs={6} sm={6} className="m-auto">
                        <div className={styles.headerLogo}>
                            <Link href="/"  >
                                {!scrolled ? (
                                    isLightHeader ? <MainLogo /> : <WhiteLogo />
                                ) : (
                                    <MainLogo />
                                )}
                            </Link>
                        </div>
                        <div className={styles.headermobileLogo}>
                            <Link href="/" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    version="1.1"
                                    viewBox="0 0 1000 322"
                                >
                                    <path d="M228.9 83.7v154.8c0 9.1-7.4 16.6-16.6 16.6H64.9c-9.1 0-16.6-7.4-16.6-16.6V83.7c0-9.1 7.4-16.6 16.5-16.6h147.5c9.2.1 16.6 7.5 16.6 16.6z"></path>
                                    <linearGradient
                                        id="Path_2_00000014633794115489489870000005246304247407552654_"
                                        x1="48.294"
                                        x2="228.891"
                                        y1="160.991"
                                        y2="160.991"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stopColor="#4A78EF"></stop>
                                        <stop offset="0.498" stopColor="#F32FC2"></stop>
                                        <stop offset="1" stopColor="#F32F53"></stop>
                                    </linearGradient>
                                    <path
                                        fill="url(#Path_2_00000014633794115489489870000005246304247407552654_)"
                                        d="M228.9 149.5v73L188.1 255h-82.9l-57-71.5v-24.8l27.6-22-25.3-31.8L98 67.1l.2-.1.1.1 25.2 31.6 39.7-31.6 65.7 82.4z"
                                    ></path>
                                    <g transform="translate(3045.843 1055.84)">
                                        <path d="M-2844.2-878.7c-.8-3.9-2.6-7.5-5.1-10.6-3.2-4.1-7.8-6.9-12.9-8-4-.7-8.1-.3-11.9 1.1l-3.6 1.5c2-3.6 3-7.8 2.7-11.9-.3-4-1.8-7.9-4.4-11-2.1-2.7-4.9-4.8-8.1-6.1-3.2-1.3-6.8-1.5-10.2-.7-3.4.7-6.7 1.9-9.7 3.7-4.4 2.8-8.6 5.9-12.7 9.2l-26.9 21.4 55.2 69.3 30.2-24.1c4.3-3.2 8.1-7 11.4-11.2 2.6-3.5 4.5-7.4 5.5-11.6 1.2-3.6 1.3-7.4.5-11zm-63.1 1.8l-11.7-14.7 1.7-1.3c3.5-2.8 6.2-4.9 8.2-6.4 1.6-1.3 3.5-2.4 5.5-3.1 1.6-.6 3.5-.6 5.1.1 1.4.6 2.7 1.5 3.6 2.7 1.1 1.3 1.9 2.9 2.4 4.5.3 1.8 0 3.7-1 5.3-1 1.8-2.4 3.4-4 4.7-1.9 1.7-4.3 3.6-7.1 5.9l-2.7 2.3zm40.4 13.5c-1.3 2.3-3 4.3-5 6-2.1 1.8-5.7 4.6-10.8 8.6l-1.3 1-13.8-17.3 3.9-3.1c2.7-2.1 5.2-4.1 7.7-6.1 1.9-1.6 4-2.9 6.3-3.9 2-1 4.3-1.3 6.5-.7 2.2.7 4 2.2 5.3 4 1.3 1.5 2.1 3.4 2.5 5.3.3 2.2-.2 4.4-1.3 6.2z"></path>
                                    </g>
                                    <path d="M271 222.6h75.2c19.4 0 36.8-15.1 36.8-33.5-.4-11.7-6.9-22.3-17.1-27.9 6.5-5.8 10.2-14 10.4-22.7 0-18.4-17.7-33.5-37-33.5H271v117.6zm80.2-82.6c-.1 6.9-5.7 12.5-12.7 12.5H305v22.7h40.2c7-.1 12.7 5.5 12.8 12.5-.1 7-5.8 12.6-12.8 12.5h-49.1v-72.6h42.4c7-.1 12.6 5.5 12.7 12.4zm41.7 82.6H418v-91.4h-25.1v91.4zm0-99.5H418v-18h-25.1v18zm37.4 61.6c0 25.3 19.2 38 44.3 38h27.6v-22.5h-27.6c-12.7 0-19.2-2.6-19.2-15.4v-30.9h46.7v-22.5h-46.7V105h-25.1v79.7zm121.5-18.8c-5.4-3-16.4-8.2-16.4-10.8 0-1.3 1.5-1.3 3.3-1.3H579v-22.5h-40.2c-19.7 0-28.7 13.2-28.7 25.7 0 15.4 16.2 23.3 30 31.1 5.4 3 16.6 8 16.6 10.6 0 1.3-1.5 1.5-3.3 1.5h-43.2v22.5h43.2c19.5 0 28.7-13.4 28.7-25.7-.1-15.7-16.3-23.5-30.3-31.1zm39.7-60.9v75.7c.4 24.8 20.9 44.6 45.7 44.1 12.5 0 24.5-4.9 33.3-13.8 8.8 8.8 20.8 13.8 33.3 13.8 24.8.5 45.3-19.3 45.8-44.1V105h-25.1v75.7c.7 11.2-7.9 20.9-19.1 21.5h-1.5c-11.2.2-20.5-8.8-20.7-20V105h-25.1v75.7c.6 11.3-8.1 21-19.5 21.5h-1.4c-11.3.1-20.6-9-20.7-20.3V105h-25zm171.1 117.6h25.1v-91.4h-25.1v91.4zm0-99.5h25.1v-18h-25.1v18zm37.4 61.6c0 25.3 19.2 38 44.3 38h27.6v-22.5h-27.6c-12.7 0-19.2-2.6-19.2-15.4v-30.9h46.7v-22.5h-46.7V105H800v79.7zm121.6-18.8c-5.4-3-16.4-8.2-16.4-10.8 0-1.3 1.5-1.3 3.3-1.3h40.2v-22.5h-40.2c-19.7 0-28.7 13.2-28.7 25.7 0 15.4 16.2 23.3 30 31.1 5.4 3 16.6 8 16.6 10.6 0 1.3-1.5 1.5-3.3 1.5h-43.2v22.5H923c19.5 0 28.7-13.4 28.7-25.7 0-15.7-16.2-23.5-30.1-31.1z"></path>
                                </svg>
                            </Link>
                        </div>
                    </Col>
                    <Col md={9} xs={6} sm={6} className="m-auto">
                        <Navigation scrolled={scrolled} isLightHeader={isLightHeader} isDarkHeader={isDarkHeader} />
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Header