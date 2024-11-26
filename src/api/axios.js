//Axios Client
import axios from "axios";

const apiClient = axios.create({
    baseURL : 'https://backarsogam-production.up.railway.app',
    withCredentials : true,    
    headers : {
        'Content-Type': ['multipart/form-data',"application/json"],            
    }
})

export default apiClient