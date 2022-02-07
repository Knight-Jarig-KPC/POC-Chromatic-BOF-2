import axios from 'axios';

const timeout = 5000
const baseURL = 'https://sp-api.kpc-dev.com'

const axiosInstance = axios.create({
    timeout,
    baseURL,
})

export default axiosInstance;