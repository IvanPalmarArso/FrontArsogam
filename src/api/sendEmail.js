//Axios Client
import apiClient from "./axios"

export const postTecnicAssistance = (request) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/sendEmail', request)
}