//React-Hooks-context
import {createContext, useContext, useEffect, useState } from "react";
//Methods
import { registerUser, verifyToken, loginUser, getOneUser, addNewUser, allUsers, deleteUser, updateUser} from "../api/user.api";
//Cookies
import Cookie from 'js-cookie'
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('Must be within an AuthProvider')
    }

    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [userList, setUserList] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errorAuth, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    
    const registerUserApi = async (user) => {
        try{
            const res = await registerUser(user)
            setIsAuthenticated(true)
            setUser(res.data)        
        }catch(err){
            setErrors([err.response.data])   
            console.log(errorAuth)         
        }
    }

    const loginUserApi = async (user) => {
        try{

            const res = await loginUser(user)
            setIsAuthenticated(true)
            setUser(res.data)

        }catch(err){
            setErrors([err.response.data])
            console.log(errorAuth)
        }
    }

    const logoutUserApi = () => {
        Cookies.remove('token')
        setIsAuthenticated(false)
        setUser(null)
    }

    const addNewUserApi = async (user) => {
        try{
            const res = await addNewUser(user)
            console.log(res.data)
        }catch(err){
            setErrors([err.response.data])
        }
    }
    
    const allUsersApi = async () => {
        try{
            const res = await allUsers()            
            setUserList(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const getOneUserApi = async (id) => {
        try{
            const res = await getOneUser(id)
            return res.data
        }catch(err){
            console.error(err)
        }
    }

    const updateUserApi = async (id, user) => {
        try{
            const res = await updateUser(id, user)
            console.log(res.data)
        }catch(err){
            console.error(err)
        }
    }

    const deleteUserApi = async(id) => {
        try{
            const res = await deleteUser(id)             
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        if(errorAuth.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [errorAuth])

    useEffect(() => {
        async function checkLogin () {
            const cookie = Cookie.get('token')

            if(!cookie){
                setIsAuthenticated(false)
                setLoading(true)
                return setUser(null)
            }

            try{

                const res = await verifyToken(cookie.token)
                console.log(res.data)

                if(!res.data){
                    setIsAuthenticated(false)
                    setLoading(true)
                    return;
                }

                setIsAuthenticated(true)
                setLoading(false)
                setUser(res.data)

            }catch(e){
                setIsAuthenticated(false)
                setLoading(true)
                setUser(null)
            }
        }

        checkLogin()
    },[])

    return(
        <AuthContext.Provider value={{
            registerUserApi,
            loginUserApi,
            logoutUserApi,

            addNewUserApi,
            allUsersApi,
            userList,
            getOneUserApi,
            updateUserApi,
            deleteUserApi,

            user,
            isAuthenticated,
            loading,
            errorAuth
        }}>
            {children}
        </AuthContext.Provider>
    )

}