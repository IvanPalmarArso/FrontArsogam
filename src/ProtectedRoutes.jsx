//Auth Context
import { UseAuth } from "./context/authContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(){
    const {user} = UseAuth()    

    if(user?.isAdmin){
        return <Navigate to='/' replace = {true}/>
    }

    return(
        <Outlet />
    )

}

export default ProtectedRoutes