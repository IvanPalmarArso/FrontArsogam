//AuthContext
import { useAuth } from "./context/authContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutesAdmin(){

    const {user, isAuthenticated} = useAuth()    

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