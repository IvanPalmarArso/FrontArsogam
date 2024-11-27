//Axios Client
import axios from "axios";

const apiClient = axios.create({
    baseURL : 'https://backarsogam-production.up.railway.app',
    withCredentials : true,        
})

export default apiClient