import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import AlertMessage from "../layout/AlertMessage"

const RegisterForm = () => {
    // Context
    const { registerUser } = useContext(AuthContext)

    // Local state
    const [regForm, setRegForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    })

    const [alert, setAlert] = useState(null)

    const { username, password, confirmPassword } = regForm

    const onChangeRegisterForm = (e) =>
        setRegForm({ ...regForm, [e.target.name]: e.target.value })

    const register = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setAlert({ type: "danger", message: "Passwords do not match!" })
            setTimeout(() => setAlert(null), 3000)
            return
        }

        const regData = await registerUser(regForm)

        if (!regData.success) {
            setAlert({ type: "danger", message: regData.message })
            setTimeout(() => setAlert(null), 3000)
        }
    }
    return (
        <>
            <Form onSubmit={register}>
                <AlertMessage info={alert}></AlertMessage>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="text"
                        placeholder="Username?"
                        name="username"
                        required
                        value={username}
                        onChange={onChangeRegisterForm}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="password"
                        placeholder="Password?"
                        name="password"
                        required
                        onChange={onChangeRegisterForm}
                        value={password}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Control
                        type="password"
                        placeholder="Confirm password?"
                        name="confirmPassword"
                        required
                        onChange={onChangeRegisterForm}
                        value={confirmPassword}
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
