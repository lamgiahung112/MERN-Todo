import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Spinner } from "react-bootstrap"
import NavbarMenu from "../components/layout/NavbarMenu"

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext)

    if (authLoading) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info"></Spinner>
            </div>
        )
    }

    // if authenticated return an outlet that renders child elements
    // else navigate to login
    return isAuthenticated ? (
        <>
            <NavbarMenu />
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    )
}

export default ProtectedRoute
