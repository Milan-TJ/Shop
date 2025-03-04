import { Navigate } from "react-router-dom";
import { useAuth } from "./Store";
import toast from 'react-hot-toast';

export const AuthorizeUser = ({ children }) => {

    const { state } = useAuth()
    const token = state?.isAuthenticated;
    if(!token) {
        toast.error('Please Login to View Profile')
        return <Navigate to={"/Signin"} replace={true}></Navigate>
      }
    else{  
      return children;
    }

}