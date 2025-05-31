import axios, { AxiosInstance } from "axios"

{/*export const url = "https://code-sync-1-9gig.onrender.com"*/}
const pistonBaseUrl = "https://emkc.org/api/v2/piston"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
