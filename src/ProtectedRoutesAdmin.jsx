//AuthContext
import { UseAuth } from "./context/authContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutesAdmin(){

    const {user, isAuthenticated} = UseAuth()    

    if(!isAuthenticated && !user?.isAdmin){
        return <Navigate to='/' replace={true}/>
    }

    if(!user?.isAdmin){
        return <Navigate to='/' replace={true}/>
    } 

    return(
        <Outlet />
    )
}

export default ProtectedRoutesAdmin