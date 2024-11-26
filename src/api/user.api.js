//Axios Client
import apiClient from "./axios";

export const registerUser = (user) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/register', user)
}

export const loginUser = (user) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/login', user)
}

export const addNewUser = (user) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/addNewUser', user)
}

export const allUsers = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/allUsers')
}

export const getOneUser = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app/api/getOneUser/${id}`)
}

export const updateUser = (id, user) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateUser/${id}`, user)
}

export const deleteUser = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app/api/deleteUser/${id}`)
}

export const VerifyToken = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/verify')
}