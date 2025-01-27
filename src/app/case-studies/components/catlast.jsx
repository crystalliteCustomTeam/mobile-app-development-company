import ButtonCommon from '@/src/components/common/button'
import { Col, Container, Row } from "react-bootstrap"

const CatLast = ({ data }) => {
    return (
        <section className="p-100">
            <Container>
                <Row>
                    <Col lg={5} md={6} className="m-auto text-center">
                        <h2 className='mb-lg-4 mb-3'>{data?.title}</h2>
                        <ButtonCommon txt="Lets Discuss!" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CatLast