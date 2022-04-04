import { createContext, useReducer, useState } from "react"
import { postReducer } from "../reducers/postReducer"
import {
    API_URL,
    POST_LOAD_FAILED,
    POST_LOAD_SUCCESS,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
} from "./constants"
import axios from "axios"

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    // States
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true,
    })

    const [showAddPostModal, setShowAddPostModal] = useState(false)
    const [showToast, setShowToast] = useState({
        show: false,
        message: "",
        type: null,
    })

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
        } catch {
            dispatch({ type: POST_LOAD_FAILED })
        }
    }

    // Add a new post
    const addPost = async (postData) => {
        try {
            const response = await axios.post(`${API_URL}/posts`, postData)
            if (response.data.success) {
                dispatch({
                    type: ADD_POST,
                    payload: response.data.post,
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Internal server error!" }
        }
    }

    // Delete a post
    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`${API_URL}/posts/${postId}`)
            if (response.data.success) {
                dispatch({
                    type: DELETE_POST,
                    payload: postId,
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Internal server error!" }
        }
    }

    // Update a post
    const updatePost = async (updatedPost) => {
        try {
            const response = await axios.put(
                `${API_URL}/posts/${updatedPost._id}`,
                updatedPost
            )
            if (response.data.success) {
                dispatch({
                    type: UPDATE_POST,
                    payload: response.data.post,
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Internal server error!" }
        }
    }

    const postContextData = {
        postState,
        getPosts,
        addPost,
        deletePost,
        updatePost,
        showAddPostModal,
        setShowAddPostModal,
        showToast,
        setShowToast,
    }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
