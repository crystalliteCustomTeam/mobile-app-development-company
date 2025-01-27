
"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/extendedservices.module.scss"
import { ArtificialIntelligence, BigData, Blockchain, InternetOfThings, MixedReality, ServiceArrow } from "@/src/app/app-constants"
import { useState } from "react";
import Link from "next/link";


const verticalTabsData = [
    {
        title: "Big Data",
        content: {
            icon: <BigData />,
            heading: "Big Data",
            description: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.",
            listItems: [
                "Consulting and implementation",
                "Data governance",
                "Support and evolution",
                "Data security",
            ],
        },
    },
    {
        title: "Artificial Intelligence",
        content: {
            icon: <ArtificialIntelligence />,
            heading: "Artificial Intelligence",
            description: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.",
            listItems: ["AI Consulting", "Machine Learning", "Deep Learning", "Support and Maintenance"],
        },
    },
    {
        title: "Internet of Things",
        content: {
            icon: <InternetOfThings />,
            heading: "Internet of Things",
            description: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.",
            listItems: ["IoT Consulting", "Smart Devices", "Network Solutions", "Security and Privacy"],
        },
    },
    {
        title: "Blockchain",
        content: {
            icon: <Blockchain />,
            heading: "Blockchain",
            description: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.",
            listItems: ["Blockchain Consulting", "Smart Contracts", "Decentralized Applications", "Security and Privacy"],
        },
    },
    {
        title: "Mixed Reality",
        content: {
            icon: <MixedReality />,
            heading: "Mixed Reality",
            description: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.",
            listItems: ["AR/VR Solutions", "Development", "Integration", "Support"],
        },
    },
];

const ExtendedServices = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`${styles.extendedServices} p-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="subTitle txtColor">Extended Services</div>
                        <h2>Some work we are proud of</h2>
                    </Col>
                    <Col lg={6} md={6} className="m-auto">
                        <p>Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec neque blandit lorem non neque blandit. nulla neque blandit. Sed donec neque blandit lorem non neque.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.verticalTabsWrapper}>
                            <div className={styles.verticalTabs}>
                                <ul>
                                    {verticalTabsData.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.verticalContent}>
                                {verticalTabsData.map((tab, index) => (
                                    activeTab === index && (
                                        <div key={index} className={styles.boxTxt}>
                                            <div className={styles.svgIcon}>
                                                {tab.content.icon}
                                            </div>
                                            <h2>{tab.content.heading}</h2>
                                            <p>{tab.content.description}</p>
                                            <ul>
                                                {tab.content.listItems.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                            <div className={styles.btnSmall}>
                                                <Link href="">
                                                    <ServiceArrow />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExtendedServices