//Axios Client
import axios from "axios";

const apiClient = axios.create({
    baseURL : 'https://backarsogam-production.up.railway.app',
    withCredentials : true,    
    headers : {
        'Access-Control-Allow-Origin' : 'https://arsogam.netlify.app'
    }
})

export default apiClient