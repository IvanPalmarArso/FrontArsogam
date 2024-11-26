//Axios Client
import axios from "axios";

const apiClient = axios.create({
    baseURL : 'https://backarsogam-production.up.railway.app',
    withCredentials : true,
    headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default apiClient