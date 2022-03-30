import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./components/layout/Landing"
import Auth from "./views/Auth"
import AuthContextProvider from "./contexts/AuthContext"
import ProtectedRoute from "./routing/ProtectedRoute"
import Dashboard from "./views/Dashboard"
import About from "./views/About"

function App() {
    return (
        <AuthContextProvider>
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
                    <Route path="/dashboard" element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/about" element={<ProtectedRoute />}>
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </Router>
        </AuthContextProvider>
    )
}

export default App
