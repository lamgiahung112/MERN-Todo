import { useContext, useState } from "react"
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

    console.log(selectedPost) // => đúng kết quả

    /**
        createdAt: "2022-04-03T14:08:05.697Z"
        description: "actually react"
        state: "TO LEARN"
        title: "learning Reactjs 2"
        updatedAt: "2022-04-03T14:08:05.697Z"
        url: "https://"
        __v: 0
        _id: "6249aa4551ff323a49f59128"
     */

    // States
    const [newPost, setNewPost] = useState(selectedPost)
    console.log(newPost) // -> trả ra object rỗng

    const { title, description, url, state } = newPost

    const closeModal = () => {
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
                            value={title}
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
                            value={description}
                            onChange={(e) => handleChangeUpdatePostForm(e)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            className="mt-3"
                            type="text"
                            placeholder="Youtube tutorial URL"
                            name="url"
                            value={url}
                            onChange={(e) => handleChangeUpdatePostForm(e)}
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

export default UpdatePostModal
