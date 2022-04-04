import { PostContext } from "../contexts/PostContext"
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect } from "react"
import { Spinner, Card, Button, Row, Col } from "react-bootstrap"
import SinglePost from "../components/posts/SinglePost"

const Dashboard = () => {
    // Contexts
    const {
        authState: {
            user: { username },
        },
    } = useContext(AuthContext)

    const {
        postState: { posts, postsLoading },
        getPosts,
    } = useContext(PostContext)

    //Get posts on mount
    useEffect(() => {
        getPosts()
    }, [])

    let body

    // Posts still loading => return a spinner
    if (postsLoading) {
        body = (
            <div className="spinner-container">
                <Spinner variant="info" animation="border" />
            </div>
        )
    }
    // No posts => return UI for client to create one
    else if (posts.length === 0) {
        body = (
            <>
                <Card className="text-center mx-5 my-5">
                    <Card.Header as="h1">Hi {username}</Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome to LearnIt</Card.Title>
                        <Card.Text>
                            Click the button below to track the skills you want
                            to learn!
                        </Card.Text>
                        <Button variant="success">LearnIt!</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
    // else render the posts
    else {
        body = (
            <>
                <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
                    {posts.map((post) => (
                        <Col key={post._id} className="my-2">
                            <SinglePost post={post} />
                        </Col>
                    ))}
                </Row>
            </>
        )
    }

    return body
}

export default Dashboard
