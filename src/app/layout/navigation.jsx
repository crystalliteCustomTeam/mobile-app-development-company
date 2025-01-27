import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { NavIcon, ServiceArrow, SubMenuIcon } from "@/src/app/app-constants"
import { Container } from "react-bootstrap"
import { useState } from "react"
import PopUp from "@/src/app/services/popup"


const ServicesMenu = [
    {
        title: "Mobile App Development",
        url: "/mobile-application-development-services",
    },
    {
        title: "Flutter app development",
        url: "/flutter-app-development",
    },
    {
        title: "Android app development",
        url: "/android-app-development-company",
    },
    {
        title: "React Native app development",
        url: "/react-native-app-development",
    },
    {
        title: "iOS app development",
        url: "/ios-app-development-company",
    },
    {
        title: "Cross Platform app development",
        url: "/cross-platform-app-development-services",
    },
    {
        title: "NFT game development",
        url: "/nft-game-development-company",
    },
    {
        title: "AI Development Company",
        url: "/ai-development-company",
    },
    {
        title: "Blockchain game development",
        url: "/blockchain-game-development-company",
    }
    ,
    {
        title: "Mobile Game Development",
        url: "/mobile-game-development-company",
    },
    {
        title: "Hybrid app development",
        url: "/hybrid-app-development-company",
    }
]
const IndustriesMenu = [
    {
        title: "Healthcare",
        url: "/healthcare-app-development-services",
    },
    {
        title: "E-Commerce",
        url: "/ecommerce-app-development",
    },
    {
        title: "Education",
        url: "/education-app-development",
    },
    {
        title: "Real Estate",
        url: "/real-estate-app-development-company",
    },
    {
        title: "Music",
        url: "/music-app-development-company",
    },
    {
        title: "Automotive",
        url: "/automotive-software-development",
    },
    {
        title: "Social Media",
        url: "/social-media-app-development-company",
    },
    {
        title: "Logistics",
        url: "/logistics-software-development",
    },
    {
        title: "Fintech",
        url: "/fintech-app-development",
    },
    {
        title: "Taxi App",
        url: "/taxi-app-development-company",
    },
]


const Navigation = ({ isDarkHeader, isLightHeader, scrolled }) => {
    const [isActive, setIsActive] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    };

    const handlePopUp = () => {
        setModalShow(true);
    };
    const HeaderLight = isLightHeader ? `${styles.blackNav}` : '';
    const HeaderDark = isDarkHeader ? `${styles.whiteNav}` : '';
    const HeaderScroll = scrolled ? `${styles.NavScroll}` : '';


    return (
        <>
            <div onClick={handleClick}
                className={`${isActive ? 'navIcon active' : 'navIcon'}`}>
                <NavIcon />
            </div>
            <ul className={`${styles.mainNavigation} ${HeaderLight}  ${HeaderDark} ${HeaderScroll}`} >
                <li>
                    <Link href="/">Home</Link>
                </li>
                {/* <li className={styles.subMenu}>
                    <Link href="#">Services</Link>
                    <div className={styles.submenuContainer}>
                        <Container>
                            <div className={styles.submenuBox}>
                                <div className={styles.submenuItem}>
                                    <div className={styles.title}>Services</div>
                                    <ul>
                                        {ServicesMenu.map((item, index) => (
                                            <li key={index}><Link href={item.url}>{item.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.submenuItem}>
                                    <div className={styles.title}>Industries</div>
                                    <ul>
                                        {IndustriesMenu.map((item, index) => (
                                            <li key={index}><Link href={item.url}>{item.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.submenuItemLast}>
                                <ul>
                                    {LocationsMenu.map((item, index) => (
                                        <li key={index}><Link href={item.url}>{item.title} <ServiceArrow /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </Container>
                    </div>
                </li> */}
                <li >
                    <Link href="/about-us" >About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact-us">Contact</Link>
                </li>
                <li className={styles.btnHeader} onClick={() => handlePopUp()}>
                    <Link href="">Connect Now</Link>
                </li>
            </ul>
            <div className={`${styles.mainMobileNavigation}  ${isActive ? `${styles.active}` : ''}`} >
                <ul className={styles.mobileNavigation}>
                    <li >
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href="/about-us">About</Link>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Services <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {ServicesMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}>{item.title}</Link></li>
                            ))}

                        </ul>
                    </li>
                    <li className={styles.subMobileMenu}>
                        <Link href="#">Industries <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {IndustriesMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}>{item.title}</Link></li>
                            ))}
                        </ul>
                    </li>
                    {/* <li className={styles.subMobileMenu}>
                        <Link href="#">Locations <SubMenuIcon /></Link>
                        <ul className={styles.mobilesubMenu}>
                            {LocationsMenu.map((item, index) => (
                                <li onClick={handleClick} key={index}><Link href={item.url}>{item.title}</Link></li>
                            ))}
                        </ul>
                    </li> */}
                    <li><Link href="/portfolio" onClick={handleClick}>Portfolio</Link></li>
                    <li>
                        <Link href="/contact-us" onClick={handleClick}>Contact</Link>
                    </li>
                    <li><Link href="/contact-us" onClick={() => handlePopUp()}>Connect Now</Link></li>
                </ul>
            </div>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Navigation