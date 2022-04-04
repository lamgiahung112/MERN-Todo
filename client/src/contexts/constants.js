export const API_URL =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:8080/api/v1"
        : "deployURL"

export const POST_LOAD_SUCCESS = "POST_LOAD_SUCCESS"
export const POST_LOAD_FAILED = "POST_LOAD_FAILED"
export const ADD_POST = "ADD_POST"
export const DELETE_POST = "DELETE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const FIND_POST = "FIND_POST"
