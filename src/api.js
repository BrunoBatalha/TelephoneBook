import axios from 'axios';
const api = axios.create({baseURL: process.env.REACT_URL_BACKEND})
export default api;