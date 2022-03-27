import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="text"
                        placeholder="Username?"
                        name="username"
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="password"
                        placeholder="Password?"
                        name="password"
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="password"
                        placeholder="Confirm password?"
                        name="confirmPassword"
                        required
                    ></Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" className="mt-4">
                    Register
                </Button>
            </Form>
            <p className="mt-2">
                Already have an account?
                <Link to="/login">
                    <Button variant="info" size="sm" className="ml-2">
                        Login
                    </Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm
