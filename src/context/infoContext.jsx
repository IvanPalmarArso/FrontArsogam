//React-hooks-context
import { createContext, useContext, useState } from "react";
//Methods
import { newInfo } from "../api/info.api";
import { updateInfo } from "../api/info.api";
import { deleteInfo } from "../api/info.api";
import { getOneInfoVideo } from "../api/info.api";
import { getAllInfo } from "../api/info.api";

export const InfoContext = createContext()

export const useInfo = () => {
    const context = useContext(InfoContext)

    if(!context){
        throw new Error('Must be within a InfoProvider')
    }

    return context
}

export const InfoProvider = ({children}) => {

    const [infoList, setInfoList] = useState([])

    const newInfoApi = async(data) => {
        try{
            const res = await newInfo(data)
            console.log(res)
        }catch(err){
            console.error(err)
        }
    }

    const updateInfoApi = async(id, data) => {
        try{
            const res = await updateInfo(id, data)
            console.log(res)
        }catch(err){
            console.error(err)
        }
    }

    const deleteInfoApi = async(id) => {
        try{
            const res = await deleteInfo(id)
            console.log(res)
        }catch(err){
            console.error(err)
        }
    }

    const getOneInfoApi = async(id) => {
        try{
            const res = await getOneInfoVideo(id)
            return res.data
        }catch(err){
            console.error(err)
        }
    }

    const getAllInfoApi = async() => {
        try{
            const res = await getAllInfo()
            setInfoList(res.data)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <InfoContext.Provider value={{
            newInfoApi,
            updateInfoApi,
            deleteInfoApi,
            getOneInfoApi,
            getAllInfoApi,
    
            infoList
        }}>
            {children}
        </InfoContext.Provider>
    )

}