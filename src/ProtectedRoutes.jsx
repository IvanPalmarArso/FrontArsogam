//Auth Context
import { useAuth } from "./context/authContext";
//React-hooks
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(){
    const {user} = useAuth()    

    if(user?.isAdmin){
        return <Navigate to='/' replace = {true}/>
    }

    return(
        <Outlet />
    )

}

export default ProtectedRoutes