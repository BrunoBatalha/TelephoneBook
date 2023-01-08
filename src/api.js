import axios from 'axios';
const api = axios.create({baseURL: 'https://agenda-telefonica-back-end.herokuapp.com/'})
export default api;