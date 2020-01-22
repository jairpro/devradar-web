import axios from 'axios';

const api = axios.create({
 //baseURL: 'http://localhost:3333'
 baseURL: 'http://backend.devradar.sistemanuvem.com'
});

export default api;