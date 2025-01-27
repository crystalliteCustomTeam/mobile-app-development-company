import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Iosbanner.module.css";
//
import icon11 from '/public/newMobilePageImages/city1.png'
import icon12 from '/public/newMobilePageImages/city2.png'
import icon14 from '/public/newMobilePageImages/city3.png'
//
import arrow from '/public/newlppage/arrow.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const NewAddress = (props) => {
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
                message: e.target.comment.value
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
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": e.target.comment.value
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

    return (
        <>
            <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
                <Container className={styles.appios}>
                    <Row className='align-items-start'>
                        <Col lg={7}>
                            <div className={styles.make}>
                                <form className={styles.formsbanner} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div>
                                                <input type='text' name='name' minLength="4" className={styles.forminput} required placeholder='Your Name' />
                                                <input type='email' name='email' className={styles.forminput} required placeholder='Email Address' />
                                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className={styles.forminput} placeholder='Phone Number' />
                                                <textarea name='comment' className={`${styles.formarea} d-block d-lg-none`} placeholder='How can we help you?' ></textarea>
                                                <div className={`${styles.take} d-flex`}>
                                                    <p className='font12 font-semibold fontf m-0'>We take your privacy seriously. Read our <span>Privacy</span></p>
                                                </div>
                                                <input type='Submit' value={score} className={`${styles.notice} d-block d-lg-none my-3`} disabled={isDisabled} />
                                            </div>
                                        </Col>
                                        <Col lg={6} className='d-none d-lg-block'>
                                            <div>
                                                <textarea name='comment' required className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                                <input type='Submit' value={score} className={`bitsForm ${styles.notice}`} disabled={isDisabled} />
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <Row>
                                <Col lg={7}>
                                    <div className={`mb-lg-4`}>
                                        <h4 className='font28 grdiant2 font-bold'>Ready For Success?</h4>
                                        <h5 className='font20 font-bold text-white'>Schedule a complimentary strategy session now with our experienced product strategists.</h5>
                                        <div className={styles.menu}>
                                            <a className={`${styles.book} ${styles.book2}`} href='javascript:window.replaceChat();'>
                                                Avail My Free Session.
                                                <Image alt="BitsWits" src={arrow} className='img-fluid ms-2' />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className={`${styles.read} mb-lg-4`}>
                                        <div className={`${styles.free}`}>
                                            <p className='font20 texttran text-white font-bold fontf'>
                                                Our Presence
                                            </p>
                                        </div>
                                        <Row className={styles.locations}>
                                            <Col lg={12} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon11} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>USA</p>
                                                    <a href="tel:3022173745" className='font12 font-regular fontf white texdocration'>
                                                        +1 302 217 3745
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={6} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon12} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>Middle East</p>
                                                    <a href="tel:+97 155 503 1266" className='font12 font-regular fontf white texdocration'>
                                                        +97 155 503 1266
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={12} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon14} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>Asia</p>
                                                    <a href="tel:+923468280101" className='font12 font-regular fontf white texdocration'>
                                                        +92 346 828 0101
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewAddress