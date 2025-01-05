//Axios Client
import apiClient from "./axios";

//Add Info
export const newInfo = (info) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/newInfo', info)
}

//Update Info Video
export const updateInfo = (id, info) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateInfo/${id}`, info)
}

//Delete Info Video
export const deleteInfo = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app/api/deleteInfo/${id}`)
}

//Get One Info Video
export const getOneInfoVideo = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app/api/getOneInfo/${id}`)
}

//Get All Info Video
export const getAllInfo = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/allInfo')
}