import axios from "axios";


axios.defaults.baseURL = '/api';

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

// Intercept requests to include the Authorization header if the token is present
axiosReq.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // or sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
