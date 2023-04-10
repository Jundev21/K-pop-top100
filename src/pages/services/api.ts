import axios from "axios";

//기본 api, url 설정하고
const API_URL = process.env.NEXT_PUBLIC_BASE_URL_LOCAL;

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

//axios interceptors 설정시

// instance.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;

//         return Promise.reject(err);
//     }
// );

export default instance;
