import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyrights &copy;-2021-2022 | ProShop
                </Col>
            </Row>
        </Container>
        </footer>
  )
}

export default Footer