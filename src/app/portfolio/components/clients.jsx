import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/portfolio/clients.module.scss";
import Image from "next/image";
import Client01 from "media/clients/client01.webp";
import Client02 from "media/clients/client02.webp";
import Client03 from "media/clients/client03.webp";
import Client04 from "media/clients/client04.webp";
import Client05 from "media/clients/client05.webp";
import Client06 from "media/clients/client06.webp";
import Client07 from "media/clients/client07.webp";
import Client08 from "media/clients/client08.webp";
import Client09 from "media/clients/client09.webp";
import Client10 from "media/clients/client10.webp";
import Client11 from "media/clients/client11.webp";
import Client12 from "media/clients/client12.webp";


const Clients = () => {
    return (
        <section className={`${styles.clientsSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">Our Milestones</div>
                        <h2>A Legacy Built on Innovation and Excellence</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>Over the years, we’ve built strong partnerships with leading technology companies, who have highlighted our commitment to understanding our clients’ needs and ability to deliver top-tier app development solutions.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.clientsBox}>
                            <div className={styles.clientsItem}>
                                <Image src={Client01.src} alt="Bitswits Clients" width={254} height={130} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client02.src} alt="Bitswits Clients" width={204} height={194} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client03.src} alt="Bitswits Clients" width={336} height={126} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client04.src} alt="Bitswits Clients" width={182} height={168} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client05.src} alt="Bitswits Clients" width={242} height={186} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client06.src} alt="Bitswits Clients" width={158} height={170} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client07.src} alt="Bitswits Clients" width={334} height={136} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client08.src} alt="Bitswits Clients" width={320} height={212} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client09.src} alt="Bitswits Clients" width={320} height={258} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client10.src} alt="Bitswits Clients" width={182} height={196} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client11.src} alt="Bitswits Clients" width={330} height={208} />
                            </div>
                            <div className={styles.clientsItem}>
                                <Image src={Client12.src} alt="Bitswits Clients" width={316} height={216} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
