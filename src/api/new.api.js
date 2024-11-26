//Axios Client
import apiClient from "./axios";

//New Notice
export const postNew = (data) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/postNew', data,{
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}

//Update New
export const updateNew = (id, data) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateNew/${id}`, data,{
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}

//Delete New
export const deleteNew = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app/api/deleteNew/${id}`, {
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}

//Get One New
export const getOneNew = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app/api/getOneNew/${id}`, {
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}

//Get All News
export const allNews = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/allNews')
}