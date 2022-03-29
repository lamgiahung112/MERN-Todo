import { createContext, useEffect, useReducer } from "react"
import { authReducer } from "../reducers/authReducer"
import { API_URL } from "./constants"
import setAuthToken from "../utils/setAuthToken"
import axios from "axios"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    })

    // Authenticate user
    const loadUser = async () => {
        if (localStorage.getItem("accessToken")) {
            setAuthToken(localStorage.getItem("accessToken"))
        }

        try {
            const response = await axios.get(`${API_URL}/auth/verify`)
            if (response.data.success) {
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user,
                    },
                })
            }
        } catch {
            localStorage.removeItem("accessToken")
            setAuthToken(null)
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            })
        }
    }

    useEffect(() => loadUser(), [])

    // Login logic
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, userForm)

            if (response.data.success) {
                localStorage.setItem("accessToken", response.data.accessToken)
            }

            await loadUser()
            return response.data
        } catch (error) {
            if (error.response.data) {
                return error.response.data
            } else return { success: false, message: error.message }
        }
    }

    const registerUser = async (userForm) => {
        try {
            const response = await axios.post(
                `${API_URL}/auth/register`,
                userForm
            )

            if (response.data.success) {
                localStorage.setItem("accessToken", response.data.accessToken)
            }

            await loadUser()
            return response.data
        } catch (error) {
            if (error.response.data) {
                return error.response.data
            } else return { success: false, message: error.message }
        }
    }

    const authContextData = { loginUser, registerUser, authState }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
