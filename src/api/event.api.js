//Axios Client
import apiClient from "./axios";

//Add Event
export const newEvent = (data) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/newEvent', data, {
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}
//Update Event
export const updateEvent = (id, data) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateEvent/${id}`, data, {
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}
//Delete Event
export const deleteEvent = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app/api/deleteEvent/${id}`, {
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}
//Get One Event
export const getOneEvent = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app/api/getOneEvent/${id}`,{
        headers : {
            'Access-Control-Allow-Origin': 'https://arsogam.netlify.app',
            'Content-Type': 'application/json',
        }
    })
}
//Get All Events
export const allEvent = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/allEvents')
}