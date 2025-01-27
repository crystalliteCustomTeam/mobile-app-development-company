import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '@/styles/HomeBanner.module.css'


function HomeBanner() {
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
                website: e.target.website.value,
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
                    "name": "website",
                    "value": e.target.website.value
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

    // Modal 
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }

    function closemodal() {
        setShow(false);
    }
    return (
        <>
            <div className={style.HomeBanner}>
                <Row>
                    <Col lg={6}>
                        <div>
                            <div className={style.leftcolums}>
                                <h1>Complete
                                    Blockchain Development</h1>
                                <p>Everything you need to connect with your games or apps to
                                    decentralize Networks</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='position-relative'>
                            <div className={style.FormHo}></div>
                            <form className={`${style.ctaForm} mt-5`} onSubmit={handleSubmit}>
                                <h3 className='font-30 fw-900 text-center mb-5 text-white'> Contact us </h3>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="name"> Name *</label>
                                        <input className='form-control' name='name' type="text" placeholder="Type Name" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="phone">Phone *</label>
                                        <input className='form-control' name='phone' type="tel" placeholder="(000) 000-000" required />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="email">Email  *</label>
                                        <input className='form-control' name='email' type="email" placeholder="Type Your Email" required />
                                    </Col>
                                    <Col lg={6} className=" pb-4">
                                        <label htmlFor="web">Your Website *</label>
                                        <input className='form-control' name='website' type="text" placeholder="Type Your Website" />
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" pb-4">
                                        <div>
                                            <textarea name='comment' type="textarea" placeholder="Type Your Message"  >
                                            </textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='px-4'>
                                    <Col lg={12} className=" mt-4">

                                        <button className={`bitsForm ${style.btnprimary}`} disabled={isDisabled}>{score}</button>

                                    </Col>
                                </Row>
                            </form>
                            <div className={style.FormHoo}></div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
        </>
    );
}
export default HomeBanner;