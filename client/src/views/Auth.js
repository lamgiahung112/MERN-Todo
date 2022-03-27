import LoginForm from "../components/auth/LoginForm"
import Landing from "../components/layout/Landing"

const Auth = ({ authRoute }) => {
    return (
        <>
            Learnit
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <Landing />}
        </>
    )
}

export default Auth
