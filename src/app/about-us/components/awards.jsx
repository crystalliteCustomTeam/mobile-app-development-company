import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/abtawards.module.scss";
import Award1 from "@/public/about/awards/award1.png"
import Award2 from "@/public/about/awards/award2.png"
import Award3 from "@/public/about/awards/award3.png"
import Award4 from "@/public/about/awards/award4.png"
import Award5 from "@/public/about/awards/award5.png"
import Award6 from "@/public/about/awards/award6.png"
import Award7 from "@/public/about/awards/award7.png"
import Award8 from "@/public/about/awards/award8.png"
import Award9 from "@/public/about/awards/award9.png"
import Award10 from "@/public/about/awards/award10.png"
import Award11 from "@/public/about/awards/award11.png"
import Image from "next/image";

export const data = [
    {
        AwardsIMG: Award1.src
    },
    {
        AwardsIMG: Award2.src
    },
    {
        AwardsIMG: Award3.src
    },
    {
        AwardsIMG: Award4.src
    },
    {
        AwardsIMG: Award5.src
    },
    {
        AwardsIMG: Award6.src
    },
    {
        AwardsIMG: Award7.src
    },
    {
        AwardsIMG: Award8.src
    },
    {
        AwardsIMG: Award9.src
    },
    {
        AwardsIMG: Award10.src
    },
    {
        AwardsIMG: Award11.src
    },
]


const Awards = () => {
    return (
        <section className={`${styles.abtAwardSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12} className="m-auto text-center">
                        <div className={styles.aboutContainer}>
                            <div className={styles.aboutTxt}>
                                <div className="subTitle txtColorCenter">Awards</div>
                                <h2>Recognized for Excellence in Software Development</h2>
                                <p>Our awards and recognition from industry leaders stand as a testament to our dedication to innovation and excellence in software development.</p>
                            </div>
                            <div className={styles.aboutAwards}>
                                {data.map((item, index) => (
                                    <div className={styles.AwardsItem} key={index}>
                                        <Image src={item.AwardsIMG} alt="Bitswits Awards" fill />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards