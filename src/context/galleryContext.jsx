//React-Hooks-Context
import { createContext, useContext, useEffect, useState } from "react";
//Methods
import { newGallery } from "../api/gallery.api";
import { updateGallery } from "../api/gallery.api";
import { deleteGallery } from "../api/gallery.api";
import { getOneGallery } from "../api/gallery.api";
import { getAllGallery } from "../api/gallery.api";

export const GalleryContext = createContext()

export const useGallery = () => {
    const context = useContext(GalleryContext)

    if(!context){
        throw new Error('Must be within a GalleryProvider')
    }

    return context
}

export const GalleryProvider = ({children}) => {

    const [galleryList, setGalleryList] = useState([])

    const newGalleryApi = async (dataGallery) => {
        try{
            const res = await newGallery(dataGallery)
            console.log(res)
        }catch(err){
            console.log(err)
        }        
    }

    const updateGalleryApi = async (id, galleryData) => {
        try{
            const res = await updateGallery(id, galleryData)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const deleteGalleryApi = async (id) => {
        try{
            const res = await deleteGallery(id)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const getOneGalleryApi = async (id) => {
        try{
            const res = await getOneGallery(id)
            return res.data
        }catch(err){
            console.log(err)
        }
    }

    const getAllGalleryApi = async () => {
        try{
            const res = await getAllGallery()
            setGalleryList(res.data)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <GalleryContext.Provider value={{
            newGalleryApi,
            updateGalleryApi,
            deleteGalleryApi,
            getOneGalleryApi,
            
            getAllGalleryApi,
            galleryList
        }}>
            {children}
        </GalleryContext.Provider>
    )

}