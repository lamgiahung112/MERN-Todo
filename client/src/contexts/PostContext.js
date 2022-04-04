import { createContext, useReducer, useState } from "react"
import { postReducer } from "../reducers/postReducer"
import { API_URL, POST_LOAD_FAILED, POST_LOAD_SUCCESS } from "./constants"
import axios from "axios"

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    // States
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true,
    })

    const [showAddPostModal, setShowAddPostModal] = useState(false)

    // Get all posts
    const getPosts = async () => {
        try {
            const response = await axios.get(`${API_URL}/posts`)
            if (response.data.success) {
                dispatch({
                    type: POST_LOAD_SUCCESS,
                    payload: response.data.posts,
                })
            }
        } catch (error) {
            dispatch({ type: POST_LOAD_FAILED })
        }
    }

    const postContextData = {
        postState,
        getPosts,
        showAddPostModal,
        setShowAddPostModal,
    }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
