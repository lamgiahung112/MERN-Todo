import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import AlertMessage from "../layout/AlertMessage"

const Login = () => {
    // Context
    const { loginUser } = useContext(AuthContext)

    // Local state
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    })

    const [alert, setAlert] = useState(null)

    const { username, password } = loginForm

    const onChangeLoginForm = (e) =>
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

    const login = async (e) => {
        e.preventDefault()

        const loginData = await loginUser(loginForm)

        if (!loginData.success) {
            setAlert({ type: "danger", message: loginData.message })
            setTimeout(() => setAlert(null), 3000)
        }
    }

    return (
        <>
            <Form onSubmit={login}>
                <AlertMessage info={alert}></AlertMessage>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="text"
                        placeholder="Username?"
                        name="username"
                        value={username}
                        required
                        onChange={(e) => onChangeLoginForm(e)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="password"
                        placeholder="Password?"
                        name="password"
                        value={password}
                        onChange={(e) => onChangeLoginForm(e)}
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
