//React hooks
import { useEffect, useState } from "react";
//React-context-hooks
import { createContext, useContext } from "react";
//Methods
import { postNew } from "../api/new.api";
import { updateNew } from "../api/new.api";
import { deleteNew } from "../api/new.api";
import { getOneNew } from "../api/new.api";
import { allNews } from "../api/new.api";

//New Context
export const NewContext = createContext()

//Use New
export const useNew = () => {
    const context = useContext(NewContext)

    if(!context){
        throw new Error('Context must be within a NewContext Provicer')
    }
    return context
}

//New Porvider
export const NewProvider = ({children}) => {
    const [newList, setNewList] = useState([])

    const postNewApi = async (data) => {
        try{
            const res = await postNew(data)
            console.log(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const updateNewApi = async (id, data) =>{
        try{
            const res = await updateNew(id, data)
            console.log(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const deleteNewApi = async(id) => {
        try{
            const res = await deleteNew(id)
            console.log(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const getOneNewApi = async (id) => {
        try{
            const res = await getOneNew(id)
            return res.data
        }catch(err){
            console.error(err)
        }
    }

    const allNewsApi = async () => {
        try{
            const res = await allNews()
            setNewList(res.data)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <NewContext.Provider value={{
            postNewApi,
            updateNewApi,
            deleteNewApi,
            getOneNewApi,
            allNewsApi,

            newList
        }}>
            {children}
        </NewContext.Provider>
    )
}