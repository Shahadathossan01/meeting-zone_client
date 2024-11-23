import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    const token=localStorage.getItem('token')
    if(token){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace/>
};

export default PrivateRoute;