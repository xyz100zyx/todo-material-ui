import axios from "axios";

export const BASE_URL = `http://localhost:3333`;

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

$api.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
})

export default $api;