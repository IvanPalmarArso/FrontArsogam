//Axios Client
import apiClient from "./axios";

//Add Event
export const newEvent = (data) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/newEvent', data)
}
//Update Event
export const updateEvent = (id, data) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateEvent/${id}`, data)
}
//Delete Event
export const deleteEvent = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app//api/deleteEvent/${id}`)
}
//Get One Event
export const getOneEvent = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app//api/getOneEvent/${id}`)
}
//Get All Events
export const allEvent = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app//api/allEvents')
}