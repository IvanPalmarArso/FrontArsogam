//Axios Client
import apiClient from "./axios";

//Add Gallery Image
export const newGallery = (galleryData) => {
    return apiClient.post('https://backarsogam-production.up.railway.app/api/newGallery', galleryData, {
        headers : {                        
            'Content-Type': 'multipart/form-data',                        
        }
    })
}

//Update Gallery Image
export const updateGallery = (id, galleryData) => {
    return apiClient.put(`https://backarsogam-production.up.railway.app/api/updateGallery/${id}`, galleryData,{
        headers : {            
            'Content-Type': 'multipart/form-data',            
        }
    })
}

//Delete Gallery Image
export const deleteGallery = (id) => {
    return apiClient.delete(`https://backarsogam-production.up.railway.app/api/deleteGallery/${id}`,{
        headers : {            
            'Content-Type': 'application/json',
        }
    })
}

//Get One Gallery Image
export const getOneGallery = (id) => {
    return apiClient.get(`https://backarsogam-production.up.railway.app/api/getOneGallery/${id}`)
}

//Get all Gallery Images
export const getAllGallery = () => {
    return apiClient.get('https://backarsogam-production.up.railway.app/api/allGallery',{
        headers : {        
            'Content-Type': 'application/json',
        }
    })
}