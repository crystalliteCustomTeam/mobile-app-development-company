"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/YourTech.module.css"
// Images 
import TechOne from "media/services/cms1.svg"
import TechTwo from "media/services/cms2.svg"
import TechThree from "media/services/cms3.svg"
import TechFour from "media/services/cms4.svg"
import TechFive from "media/services/cms5.svg"
import TechSix from "media/services/cms6.svg"
import TechSeven from "media/services/cms7.svg"
import TechEight from "media/services/cms8.svg"
import TechNine from "media/services/cms9.svg"
import TechTen from "media/services/cms10.svg"
import TechEleven from "media/services/frontend-1.svg"
import TechTwelve from "media/services/frontend-2.svg"
import TechThirteen from "media/services/frontend-3.svg"
import TechFourteen from "media/services/frontend-4.svg"
import TechFifteen from "media/services/frontend-5.svg"
import TechSixteen from "media/services/frontend-6.svg"
import TechSeventeen from "media/services/backend-1.svg"
import TechEighteen from "media/services/backend-2.svg"
import TechNineteen from "media/services/backend-3.svg"
import TechTwenty from "media/services/backend-4.svg"
import TechTwentyOne from "media/services/backend-5.svg"
import TechTwentyTwo from "media/services/backend-6.svg"
import TechTwentyThree from "media/services/backend-7.svg"
import TechTwentyFour from "media/services/backend-8.svg"
import TechTwentyFive from "media/services/backend-9.svg"
import TechTwentySix from "media/services/backend-10.svg"
import TechTwentySeven from "media/services/mobile-1.svg"
import TechTwentyEight from "media/services/mobile-2.svg"
import TechTwentyNine from "media/services/mobile-3.svg"
import TechThirty from "media/services/mobile-4.svg"
import TechThirtyOne from "media/services/mobile-5.svg"
import TechThirtyTwo from "media/services/mobile-6.svg"
import TechThirtyThree from "media/services/mobile-7.svg"
import TechThirtyFour from "media/services/mobile-8.svg"
import TechThirtyFive from "media/services/data-base-1.svg"
import TechThirtySix from "media/services/data-base-2.svg"
import TechThirtySeven from "media/services/data-base-3.svg"
import TechThirtyEight from "media/services/data-base-4.svg"
import TechThirtyNine from "media/services/data-base-5.svg"
import TechFourty from "media/services/data-base-6.svg"
import TechFourtyOne from "media/services/cloud-1.svg"
import TechFourtyTwo from "media/services/cloud-2.svg"
import TechFourtyThree from "media/services/cloud-3.svg"
import TechFourtyFour from "media/services/tools-1.svg"
import TechFourtyFive from "media/services/tools-2.svg"
import TechFourtySix from "media/services/tools-3.svg"
import TechFourtySeven from "media/services/tools-4.svg"
import TechFourtyEight from "media/services/tools-5.svg"
import TechFourtyNine from "media/services/tools-6.svg"
import TechFifty from "media/services/tools-7.svg"
import TechFiftyOne from "media/services/tools-8.svg"
import TechFiftyTwo from "media/services/tools-9.svg"
import TechFiftyThree from "media/services/tools-10.svg"
import TechFiftyFour from "media/services/tools-11.svg"
import TechFiftyFive from "media/services/tools-12.svg"
import TechFiftySix from "media/services/tools-13.svg"
import TechFiftySeven from "media/services/pms-1.svg"
import TechFiftyEight from "media/services/pms-2.svg"
import TechFiftyNine from "media/services/pms-3.svg"
import TechSixty from "media/services/pms-4.svg"
import TechSixtyOne from "media/services/pms-5.svg"
import TechSixtyTwo from "media/services/pms-6.svg"
import TechSixtyThree from "media/services/pms-7.svg"
import TechSixtyFour from "media/services/pms-8.svg"

const YourTech = () => {
    // Tabs
    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <section className={styles.YourTechSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='manrope font-bold mb-md-3'>Our <span className='newfycolr'>3D Game Developmentk</span> Technology Stack</h2>
                            <p className='manrope font16 font-medium pb-2 pb-md-4 mb-xl-4'>We select for you the right database, language, and framework for an ideal gaming experience.</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabList}>
                            <ul className={styles.tabList}>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab1" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab1")}>
                                   Game Engines
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab2" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab2")}>
                                    Programming Languages
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab3" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab3")}>
                                   Graphics & Design Tools
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab4" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab4")}>
                                   Databases
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab5" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab5")}>
                                    Frameworks & Libraries
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab6" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab6")}>
                                    Testing & QA Tools
                                </li>
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            {activeTab1 == "tab1" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Unity</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Unreal Engine</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Godot</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>CryEngine</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab2" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechEleven} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>C++</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwelve} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>C#</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Python</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>JavaScript</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFifteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Angular</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSixteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Vue.JS</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            )}
                            {activeTab1 == "tab3" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSeventeen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Autodesk Maya</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechEighteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Blender</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechNineteen} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Adobe Photoshop</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwenty} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Substance Painter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentyOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Symfony</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentyTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Python</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentyThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Yii</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentyFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>GraphQL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentyFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Typo3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwentySix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>CakePHP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab4" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtyFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>MySQL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourty} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>PostgreSQL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtyEight} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>SQLite</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtySeven} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>MongoDB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab5" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtyFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Three.js</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtySix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Babylon.js</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtySeven} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>OpenGL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThirtyEight} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Vulkan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab6" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourtyOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Jenkins</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourtyTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Selenium</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourtyThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>JIRA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFourtyThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>TestRail</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default YourTech