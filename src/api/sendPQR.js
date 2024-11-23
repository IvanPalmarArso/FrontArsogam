//Axios Client
import apiClient from "./axios"

export const postPqr = (request) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/sendPQR',request)
}