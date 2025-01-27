import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Footer.module.css"
import { FaComments, FaEnvelope, FaGlobeAsia, FaPhoneAlt, FaUser } from 'react-icons/fa';
// images
import Payment from "media/videoexplainer/payment-img.png"
import UpArrow from "media/videoexplainer/up-arrow.png"

const VideoFooter = () => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Submit');
    const [isDisabled, setIsDisabled] = useState(false);

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
                message: e.target.comment.value,
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
            <section className={styles.footerSec}>
                <div className='container'>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.txt}>
                                <h2>Get in Touch Now!</h2>
                                <p>Its High Time to Showcase Your Store to the World</p>
                            </div>
                            <div className={styles.form}>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6} className={`${styles.inputs} `}>
                                            <FaUser className={styles.icon} />
                                            <input type="text" name="name" placeholder='Enter your name' required />
                                        </Col>
                                        <Col lg={6} className={` ${styles.inputs} `}>
                                            <FaEnvelope className={styles.icon} />
                                            <input type="email" name="email" placeholder='Enter Email' required />
                                        </Col>
                                        <Col lg={12} className={`${styles.inputs} w-100 `}>
                                            <FaPhoneAlt className={styles.icon} />
                                            <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' required />
                                        </Col>
                                        <Col lg={12} className={`${styles.inputs} w-100 `}>
                                            <FaComments className={styles.icon} />
                                            <textarea name='comment' placeholder='Message'></textarea>
                                        </Col>
                                    </Row>
                                    <div className={`${styles.btn} mt-3`}>
                                        <button type='submit' className='bitsForm' disabled={isDisabled}>{score}</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.address_detail}>
                                <ul>
                                    <li>
                                        <a href="tel:833 500 6007">
                                            <FaPhoneAlt className={styles.footerIcons} /> 833 500 6007
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@BitsWits.co">
                                            <FaEnvelope className={styles.footerIcons} /> info@BitsWits.co
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.bitswits.co/">
                                            <FaGlobeAsia className={styles.footerIcons} /> www.bitswits.co
                                        </a>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <div className={styles.copyright}>
                <div className={`${styles.copyRightCon} container`}>
                    <p className=''>© 2024 - All Rights Reserved By Bitswits</p>
                    <div className={`${styles.topArrow}`}>
                        <Link href="#" className={styles.topIcon}>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p>Top</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VideoFooter
