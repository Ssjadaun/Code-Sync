import axios, { AxiosInstance } from "axios"

const pollinationsBaseUrl = "https://text.pollinations.ai"
const BASE_URL = process.env.REACT_APP_API_URL;

// Example with axios
axios.get(`${BASE_URL}/api/some-endpoint`);

const instance: AxiosInstance = axios.create({
    baseURL: pollinationsBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
