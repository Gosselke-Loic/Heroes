import axios from "axios";

/**
 * @constant
 * Configuration for axios instance
 */
const init = axios.create({
    baseURL: "http://localhost:4000",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default init;