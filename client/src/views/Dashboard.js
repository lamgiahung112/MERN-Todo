import { PostContext } from "../contexts/PostContext"
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect } from "react"
import {
    Spinner,
    Card,
    Button,
    Row,
    Col,
    OverlayTrigger,
    Tooltip,
    Toast,
} from "react-bootstrap"
import addIcon from "../assets/plus-circle-fill.svg"
import SinglePost from "../components/posts/SinglePost"
import AddPostModal from "../components/posts/AddPostModal"

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
        setShowAddPostModal,
        showToast: { show, message, type },
        setShowToast,
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
                        <Button
                            variant="success"
                            onClick={setShowAddPostModal.bind(this, true)}
                        >
                            LearnIt!
                        </Button>
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

                {/* OPEN ADD POST MODAL */}
                <OverlayTrigger
                    placement="left"
                    overlay={<Tooltip>Add a new skill to learn</Tooltip>}
                >
                    <Button
                        className="btn-floating"
                        onClick={setShowAddPostModal.bind(this, true)}
                    >
                        <img
                            src={addIcon}
                            alt="add post"
                            width={60}
                            height={60}
                        />
                    </Button>
                </OverlayTrigger>
            </>
        )
    }

    return (
        <>
            {body}
            <AddPostModal />

            {/** After post is added, show toast */}
            <Toast
                show={show}
                style={{ position: "fixed", top: "20%", right: "10px" }}
                className={`bg-${type} text-white`}
                onClose={setShowToast.bind(this, {
                    show: false,
                    message: "",
                    type: null,
                })}
                delay={3000}
                autohide
            >
                <Toast.Body>
                    <strong>{message}</strong>
                </Toast.Body>
            </Toast>
        </>
    )
}

export default Dashboard
