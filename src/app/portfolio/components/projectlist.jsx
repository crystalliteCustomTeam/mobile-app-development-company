import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/projectlist.module.scss"
import Case01 from "media/projects/case01.webp"
import Case02 from "media/projects/case02.webp"
import Case03 from "media/projects/case03.webp"
import Case04 from "media/projects/case04.webp"
import Case05 from "media/projects/case05.webp"
import Case06 from "media/projects/case06.webp"
import Case07 from "media/projects/case07.webp"
import Case08 from "media/projects/case08.webp"
import Logo01 from "media/projects/Icon01.webp"
import Logo02 from "media/projects/Icon03.webp"
import Logo03 from "media/projects/Icon02.webp"
import Logo04 from "media/projects/Icon04.webp"
import Logo05 from "media/projects/Icon05.webp"
import Logo06 from "media/projects/Icon06.webp"
import Logo07 from "media/projects/Icon07.webp"
import Logo08 from "media/projects/Icon08.webp"
import Image from "next/image"
import { ArrowIcon } from "../../app-constants"
import Link from "next/link"


const data = [
    {
        name: "Single’s Up",
        logo: Logo01.src,
        BgImg: Case01.src,
        link: "/case-studies/singles-up"

    },
    {
        name: "Vifty",
        logo: Logo02.src,
        BgImg: Case02.src,
        link: "/case-studies/vifty"

    },
    {
        name: "Soul Scribe",
        logo: Logo03.src,
        BgImg: Case03.src,
        link: "/case-studies/soul-scribe"

    },
    {
        name: "Nutrisnap",
        logo: Logo04.src,
        BgImg: Case04.src,
        link: "/case-studies/nutri-snap"

    },
    {
        name: "HomePro",
        logo: Logo05.src,
        BgImg: Case05.src,
        link: "/case-studies/home-pro-connect"

    },
    {
        name: "Practice Pen",
        logo: Logo06.src,
        BgImg: Case06.src,
        link: " "

    },
    {
        name: "Combat",
        logo: Logo07.src,
        BgImg: Case07.src,
        link: " "

    },
    {
        name: "Route Rover",
        logo: Logo08.src,
        BgImg: Case08.src,
        link: " "

    }
]
const ProjectList = () => {
    return (
        <section className={`${styles.projectList} pt-50`}>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col lg={6} md={6} key={index}>
                            <div className={styles.casestudyBox} style={{ backgroundImage: `url(${item.BgImg})` }} >
                                <div className={styles.casestudyContent} >
                                    <div className={styles.casestudyTxt}>
                                        <div className={styles.logoSec}>
                                            <Image src={item.logo} alt={item.name} width={85} height={85} />
                                            <span>{item.name}</span>
                                        </div>

                                    </div>
                                    <div className={styles.btnSec}>
                                        <div className={`catButton white`} >
                                            <Link href={item.link}><span>View Case Study</span> <ArrowIcon /></Link>
                                        </div>
                                        {/* <ButtonCommon txt="View Case Study" color="white" /> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default ProjectList