export const API_URL =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:8080/api/v1"
        : "deployURL"
