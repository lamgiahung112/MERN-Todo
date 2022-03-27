import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {
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
                <Button variant="success" type="submit" className="mt-4">
                    Login
                </Button>
            </Form>
            <p className="mt-2">
                Don't have an account?
                <Link to="/register">
                    <Button variant="info" size="sm" className="ml-2">
                        Register
                    </Button>
                </Link>
            </p>
        </>
    )
}

export default Login