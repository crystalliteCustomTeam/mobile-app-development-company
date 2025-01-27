import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/OurLocations.module.css'
//
import arrow from "media/icons/rightArrow.png"
import circle from "media/icons/circle.png"

const locations = [
    {
        name: 'Austin',
        description: 'Mobile App Development in Austin',
        href: "/app-development-austin",
    },
    {
        name: 'Chicago',
        description: 'Mobile App Development in Chicago',
        href: "/app-development-chicago",
    },
    {
        name: 'Dallas',
        description: 'Mobile App Development in Dallas',
        href: "/mobile-app-development-company-dallas",
    },
    {
        name: 'Denver',
        description: 'Mobile App Development in Denver',
        href: "/mobile-app-development-company-denver",
    },
    {
        name: 'Dubai',
        description: 'Mobile App Development in Dubai',
        href: "/mobile-app-development-company-dubai",
    },
    {
        name: 'Florida',
        description: 'Mobile App Development in Florida',
        href: "/app-development-florida",
    },
    {
        name: 'Houston',
        description: 'Mobile App Development in Houston',
        href: "/app-development-houston",
    },
    {
        name: 'Miami',
        description: 'Mobile App Development in Miami',
        href: "/mobile-app-development-company-miami",
    },
    {
        name: 'New York',
        description: 'Mobile App Development in New York',
        href: "/app-development-company-new-york",
    },
    {
        name: 'Saudi Arabia',
        description: 'Mobile App Development in Saudi Arabia',
        href: "/mobile-app-development-company-saudi-arabia",
    },
    {
        name: 'Toronto',
        description: 'Mobile App Development in Toronto',
        href: "/app-development-company-toronto",
    },
    {
        name: 'Washington DC',
        description: 'Mobile App Development in Washington DC',
        href: "/app-development-company-washington-dc",
    },
];

const OurLocations = () => {
    return (
        <>
            <section className={styles.locations}>
                <Container>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <h2 className="text-center text-white">
                                Our <span className="newfycolr">Global Footprint</span>
                            </h2>
                        </Col>
                        {locations.map((location, index) => (
                            <Col md={6} lg={4} key={index}>
                                <div className={styles.locCard}>
                                    <div className={styles.title}>
                                        <h6>{location.name}</h6>
                                        <a href={location.href}>
                                            <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <Image src={circle} alt='Bitswits' className='img-fluid' />
                                        <p className='mb-0'>{location.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurLocations
