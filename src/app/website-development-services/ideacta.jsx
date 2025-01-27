import ContactFrom from '@/src/components/common/contactfrom'
import styles from '@/styles/website-development-services/ideacta.module.scss'
import { Col, Container, Row } from "react-bootstrap"


const IdeaCta = ({ data }) => {
    return (
        <section className={`${styles.appideaSection} p-50`} id="contact">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg={6} md={6} className='m-auto'>
                        <div className={styles.boxItem}>
                            <h2>{data?.title}</h2>
                            <div className={styles.custumTitle}>
                                {data?.text}
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={6}>
                        <div className={styles.ideaBox}>
                            <h5>{data?.formtitle}</h5>
                            <ContactFrom appidea={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IdeaCta