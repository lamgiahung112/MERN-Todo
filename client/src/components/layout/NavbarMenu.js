import { Navbar, Nav, Button } from "react-bootstrap"
import learnItLogo from "../../assets/logo.svg"
import logoutIcon from "../../assets/logout.svg"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { memo, useContext } from "react"

const NavbarMenu = () => {
    const {
        authState: {
            user: { username },
        },
        logoutUser,
    } = useContext(AuthContext)

    return (
        <Navbar expand="lg" bg="success" variant="dark" className="shadow">
            <Navbar.Brand className="font-weight-bolder text-white">
                <img
                    src={learnItLogo}
                    alt="logo"
                    width="32"
                    height="32"
                    className="mr-2"
                ></img>
                LearnIt
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link
                    className="font-weight-bolder text-white"
                    to="/dashboard"
                    as={Link}
                >
                    Dashboard
                </Nav.Link>
                <Nav.Link
                    className="font-weight-bolder text-white"
                    to="/about"
                    as={Link}
                >
                    About
                </Nav.Link>
            </Nav>

            <Nav style={{ marginLeft: 1400 }}>
                <Nav.Link className="font-weight-bolder text-white" disabled>
                    Welcome {username}
                </Nav.Link>
                <Button
                    variant="danger"
                    className="font-weight-bolder text-white"
                    onClick={logoutUser}
                >
                    <img
                        src={logoutIcon}
                        alt="logoutIcon"
                        width="32"
                        height="32"
                        className="mr-2"
                    ></img>
                    Logout
                </Button>
            </Nav>
        </Navbar>
    )
}

export default memo(NavbarMenu)
