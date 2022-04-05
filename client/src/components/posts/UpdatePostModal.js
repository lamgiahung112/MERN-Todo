import { useContext, useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { PostContext } from "../../contexts/PostContext"

const UpdatePostModal = () => {
    // Context
    const {
        showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast,
        postState: { selectedPost },
    } = useContext(PostContext)

    // States
    const [newPost, setNewPost] = useState({ ...selectedPost })

    useEffect(() => setNewPost({ ...selectedPost }), [selectedPost])

    const { title, description, url, state } = newPost

    const closeModal = () => {
        setNewPost({ ...selectedPost })
        setShowUpdatePostModal(false)
    }

    const handleChangeUpdatePostForm = (e) =>
        setNewPost({ ...newPost, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { success, message } = await updatePost(newPost)
        closeModal()
        setShowToast({
            show: true,
            message,
            type: success ? "success" : "danger",
        })
    }

    return (
        <Modal show={showUpdatePostModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update your skill-learning process!</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            required
                            aria-describedby="title-help"
                            value={title || ""}
                            onChange={(e) => handleChangeUpdatePostForm(e)}
                        ></Form.Control>
                        <Form.Text id="title-help" muted>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description"
                            name="description"
                            value={description || ""}
                            onChange={(e) => handleChangeUpdatePostForm(e)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            className="mt-3"
                            type="text"
                            placeholder="Youtube tutorial URL"
                            name="url"
                            value={url || ""}
                            onChange={(e) => handleChangeUpdatePostForm(e)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            className="mt-3"
                            as="select"
                            value={state || "TO LEARN"}
                            onChange={handleChangeUpdatePostForm}
                            name="state"
                        >
                            <option value="TO LEARN">TO LEARN</option>
                            <option value="LEARNING">LEARNING</option>
                            <option value="LEARNED">LEARNED</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="success" type="submit">
                        Update
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default memo(UpdatePostModal)
