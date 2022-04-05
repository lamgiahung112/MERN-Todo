import { memo, useContext, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { PostContext } from "../../contexts/PostContext"

const AddPostModal = () => {
    // Context
    const { showAddPostModal, setShowAddPostModal, addPost, setShowToast } =
        useContext(PostContext)

    // States
    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        url: "",
        state: "TO LEARN",
    })

    const { title, description, url } = newPost

    const closeModal = () => {
        setNewPost({
            title: "",
            description: "",
            url: "",
            state: "TO LEARN",
        })
        setShowAddPostModal(false)
    }

    const handleChangeNewPostForm = (e) =>
        setNewPost({ ...newPost, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { success, message } = await addPost(newPost)
        closeModal()
        setShowToast({
            show: true,
            message,
            type: success ? "success" : "danger",
        })
    }

    return (
        <Modal show={showAddPostModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to learn?</Modal.Title>
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
                            value={title}
                            onChange={(e) => handleChangeNewPostForm(e)}
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
                            value={description}
                            onChange={(e) => handleChangeNewPostForm(e)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            className="mt-3"
                            type="text"
                            placeholder="Youtube tutorial URL"
                            name="url"
                            value={url}
                            onChange={(e) => handleChangeNewPostForm(e)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="success" type="submit">
                        Learn it!
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default memo(AddPostModal)
