"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/website-development-services/process.module.scss";
import { EcommercePortfolioIcon01, EcommercePortfolioIcon02, EcommercePortfolioIcon03, EcommercePortfolioIcon04 } from "../app-constants"
import AdvanceImg1 from "media/website-development-services/advance/advance-img-1.svg"
import AdvanceImg2 from "media/website-development-services/advance/advance-img-2.svg"
import AdvanceImg3 from "media/website-development-services/advance/advance-img-3.svg"
import AdvanceImg4 from "media/website-development-services/advance/advance-img-4.svg"
import AdvanceImg5 from "media/website-development-services/advance/advance-img-5.svg"
import AdvanceImg6 from "media/website-development-services/advance/advance-img-6.svg"
import ButtonCommon from "@/src/components/common/button";
import Image from "next/image";

const data = {
    subTitle: "Our Process",
    title: "The Game Plan For Building Your App",
    text: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
};

const list = [
    {
        icon: AdvanceImg1.src,
        title: (<>Market Research</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: AdvanceImg2.src,
        title: (<>Platform Selection</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: AdvanceImg3.src,
        title: (<>Localization</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: AdvanceImg4.src,
        title: (<>SEO Optimization</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: AdvanceImg5.src,
        title: (<>Logistics Planning</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: AdvanceImg6.src,
        title: (<>Marketing Strategy</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
];

const Process = () => {

    return (
        <section className={`${styles.processSection} p-100`} id="process">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto">
                        <div className={`${styles.subTitle} ${styles.txtColorCenter}`}>{data?.subTitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <div className={styles.servicesBox}>
                    {list.map((item, index) => (
                        <div className={styles.servicesItemBox} key={index}>
                            <div className={styles.numCount}>
                                {index + 1}
                            </div>
                            <div className={styles.servicesItem}>
                                <Image src={item.icon} width={60}  height={60} className={styles.servicesItemImg}/>
                                <h4>{item.title}</h4>
                                <p>{item.txt}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.btn}>
                    <ButtonCommon txt="Let’s Discuss!" />
                </div>
            </Container>
        </section>
    );
};

export default Process;