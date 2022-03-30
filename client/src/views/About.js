import { Button, Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <Row className="mt-5" style={{ marginRight: 0 }}>
            <Col className="text-center">
                <Button
                    variant="success"
                    href="https://github.com/lamgiahung112"
                    size="lg"
                >
                    Visit my github page for more!
                </Button>
            </Col>
        </Row>
    )
}

export default About
