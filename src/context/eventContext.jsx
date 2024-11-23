//React-context
import { createContext, useContext, useState } from "react";
//Methods
import { newEvent } from "../api/event.api";
import { updateEvent } from "../api/event.api";
import { deleteEvent } from "../api/event.api";
import { getOneEvent } from "../api/event.api";
import { allEvent } from "../api/event.api";

//Event Context
export const EventContext = createContext()

//UseEvent
export const useEvent = () => {
    const context = useContext(EventContext)

    if(!context){
        throw new Error('Muts be within an EventProvider')
    }

    return context
}

//Event Provider
export const EventProvider = ({children}) => {
    
    const [eventList, setEventList] = useState([])

    const newEventApi = async(data) => {
        try{
            const res = await newEvent(data)
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }

    const updateEventApi = async(id, data) => {
        try{
            const res = await updateEvent(id, data)
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }

    const deleteEventApi = async(id) => {
        try{
            const res = await deleteEvent(id)
            console.log(res)
        }catch(e){
            console.error(e)
        }
    }

    const getOneEventApi = async(id) => {
        try{
            const res = await getOneEvent(id)
            return res.data
        }catch(e){
            console.log(e)
        }
    }

    const allEventsApi = async() => {
        try{
            const res = await allEvent()
            setEventList(res.data)
        }catch(e){
            console.error(e)
        }
    }

    return(
        <EventContext.Provider value={{
            newEventApi,
            updateEventApi,
            deleteEventApi,
            getOneEventApi,
            allEventsApi,

            eventList
        }}>
            {children}
        </EventContext.Provider>
    )
}