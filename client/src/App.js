import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./components/layout/Landing"
import Auth from "./views/Auth"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/login"
                    element={<Auth authRoute="login"></Auth>}
                />
                <Route
                    path="/register"
                    element={<Auth authRoute="register"></Auth>}
                />
            </Routes>
        </Router>
    )
}

export default App
