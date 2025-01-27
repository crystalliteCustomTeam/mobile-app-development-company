import styles from "@/styles/services/popup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import BGIMG from "media/popupImg.webp"
import Image from "next/image"
import { ClosedBtn } from "@/src/app/app-constants"
import ContactFrom from "@/src/components/common/contactfrom"

const PopUp = (props) => {
    const { onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ><section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6} md={6} className="my-auto">
                            <Image src={BGIMG.src} alt="Bitswits Popup IMG" width={1862} height={1152} />
                        </Col>
                        <Col lg={6} md={6}>
                            <div className={styles.fromPopup}>
                                <h3>Let’s start a project
                                    together</h3>
                                <p>We’ll contact you within a couple of hours to schedule a meeting to discuss your goals.</p>
                                <ContactFrom popup={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default PopUp