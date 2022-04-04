import { useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { PostContext } from "../../contexts/PostContext"

const AddPostModal = () => {
    // Context
    const { showAddPostModal, setShowAddPostModal } = useContext(PostContext)

    const closeModal = () => {
        setShowAddPostModal(false)
    }

    return (
        <Modal show={showAddPostModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to learn?</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            required
                            aria-describedby="title-help"
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
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            className="mt-3"
                            type="text"
                            placeholder="Youtube tutorial URL"
                            name="url"
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

export default AddPostModal
