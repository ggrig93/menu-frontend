import axios from "axios";
import environment from '../../environment';
const api = axios.create({
    withCredentials: false,
    baseURL: environment.baseURL,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

export default api;