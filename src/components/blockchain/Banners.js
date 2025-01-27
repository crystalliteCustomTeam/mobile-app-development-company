import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
import CountUp from 'react-countup';
import style from '@/styles/blockchain/Banner.module.css';
//
import { FaComment, FaGlobe } from "react-icons/fa";
//
import phone from '@/public/blockchain/images/phone.png';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"

function Banners() {

    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [score, setScore] = useState('Submit');

    // Creating function to load IP address from the API

    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: "No Comments"
            }
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        await fetch('https://brandsapi.pulse-force.com/api/v1/leads', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });

        // Second API call to SheetDB
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "IP": `${ip.ip} - ${ip.city} - ${ip.country}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        // Third API call to another endpoint
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "fields": [
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "name",
                    "value": e.target.name.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": e.target.phone.value
                }
            ],
            "context": {
                "ipAddress": ip.IPv4,
                "pageUri": pagenewurl,
                "pageName": pagenewurl
            },
            "legalConsentOptions": {
                "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                        {
                            "value": true,
                            "subscriptionTypeId": 999,
                            "text": "I agree to receive marketing communications from Example Company."
                        }
                    ]
                }
            }
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }

    const bannerVideo = {
        video: "https://player.vimeo.com/progressive_redirect/playback/961499637/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a3bd8570552dc46bf37d1e808b68d7899f89d691601afd89ffa9778943c9a415"
    }

    return (
        <>
            <div className='HomeBanner pt-5'>
                <div className={style.overlay}></div>
                <div className='homeVideo'>
                    {bannerVideo && (
                        <video className='' autoPlay muted loop src={bannerVideo.video} type="video/mov"></video>
                    )}
                </div>

                <Container>
                    <Row className={` ${style.mood} gy-3`}>
                        <Col lg={6}>
                            <div className='point zindx'>
                                <div className={style.Lcontent}>
                                    <h1 className='text-white mb-2 pl-4 font55block'>
                                        <span className='fw700'> Your Trusted Tech Partner for
                                            Fast-Paced Blockchain </span>
                                        <span className='fw700 txt-primary'>Innovations & Thrilling Gaming Experiences</span></h1>
                                    <p className='text-white f15'>We build robust blockchain solutions for enterprises helping them decentralize their business & lay the foundation of transparent, & secure business systems.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={5}></Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none zindx'>
                        <Row className='pb-0 mb-0 align-items-end'>
                            <Col lg={5}>
                                <div className={`${style.ctac} mt-2`}>
                                    <div className='d-flex justify-content-start'>
                                        <a href='javascript:window.replaceChat();' className={style.btnpri}><i></i> <FaComment /> Live Chat</a>
                                        <a href='tel:3022173745' className={style.btnpri1}><Image quality={75} src={phone} alt='logo' width={20} />  +1 312 379 5987
                                        </a>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm1} mt-2`}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h4 className={style.h41}>Solutions Delivered</h4>
                                        <h4 className={style.h42}>
                                            <CountUp duration={5.75} end={1000} delay={3000} enableScrollSpy /> <span>+</span>

                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className={`${style.ctaForm2} mt-5`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className={`${style.ctaForm2} badge badge-primary m-2`}>New</span>
                                            <span className={style.para3}>The Mystery Box Challenge is on! Update the xPortal...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm2} mt-1`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className={`${style.ctaForm2} badge badge-primary m-2`}>Jul 2</span>
                                            <span className={style.para3}>The Mystery Box Challenge is on! Update the xPortal...</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={`${style.ctaForm2} p-3 mt-2`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className='font14 text-white fw400'>Years Of Experience</span>
                                            <span className='text-white'>

                                                <CountUp duration={4.75} end={10} delay={3000} enableScrollSpy /> <span>+</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm2} p-3 mt-2`}>
                                    <div className='d-inline'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className='font15 text-white fw600'>

                                                <span><FaGlobe /></span>

                                                <CountUp className='ps-2' duration={4.75} end={150} delay={3000} enableScrollSpy /> <span>+</span>
                                            </span>
                                            <span className='text-white font15'>Countries Served</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.ctaForm1} mt-2`}>
                                    <div className='d-inline'>
                                        <p className='font10 fw400 text-white'>Vetted Developers</p>
                                        <p className={style.cheading}>
                                            <CountUp duration={4.75} end={300} delay={3000} enableScrollSpy /> <span>+</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='position-relative zindx mt-5 mt-md-0'>
                        <form className={`${style.ctaForm} mt-3`} onSubmit={handleSubmit}>
                            <Row className='px-4'>
                                <Col lg={3} className="pb-4">
                                    <label htmlFor="name"> Name *</label>
                                    <input className='form-control' type="text" name='name' placeholder="Type Name" required />
                                </Col>
                                <Col lg={3} className=" pb-4">
                                    <label htmlFor="phone">Phone *</label>
                                    <input className='form-control' type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" placeholder="(000) 000-000" required />
                                </Col>
                                <Col lg={3} className=" pb-4">
                                    <label htmlFor="email">Email  *</label>
                                    <input className='form-control' type="email" name='email' placeholder="Type Your Email" required />
                                </Col>
                                <Col lg={3} className="pt-4 mt-2">
                                    <button className={`bitsForm ${style.btnprimary}`} disabled={isDisabled}>{score}</button>
                                </Col>
                            </Row>
                        </form>

                    </div>
                </Container>

                <div className='mixColor'></div>
            </div>

        </>
    );
}
export default Banners;