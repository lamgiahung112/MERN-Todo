import { Card, Row, Col, Badge } from "react-bootstrap"
import ActionButtons from "./ActionButton"

const SinglePost = ({ post: { _id, state, title, description, url } }) => (
    <Card
        className="shadow"
        border={
            state === "LEARNED"
                ? "success"
                : state === "LEARNING"
                ? "warning"
                : "danger"
        }
    >
        <Card.Body>
            <Card.Title>
                <Row>
                    <Col>
                        <p className="post-title">{title}</p>
                        <Badge
                            pill
                            variant={
                                state === "LEARNED"
                                    ? "success"
                                    : state === "LEARNING"
                                    ? "warning"
                                    : "danger"
                            }
                        >
                            {state}
                        </Badge>
                    </Col>
                    <Col className="text-right">
                        <ActionButtons url={url} _id={_id} />
                    </Col>
                </Row>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
    </Card>
)

export default SinglePost
