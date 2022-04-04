import {
    POST_LOAD_FAILED,
    POST_LOAD_SUCCESS,
    ADD_POST,
} from "../contexts/constants"

export const postReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case POST_LOAD_SUCCESS:
            return {
                ...state,
                posts: payload,
                postsLoading: false,
            }
        case POST_LOAD_FAILED:
            return {
                ...state,
                posts: [],
                postsLoading: false,
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload],
                postsLoading: false,
            }
        default:
            return { ...state }
    }
}
