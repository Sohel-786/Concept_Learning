import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({children, path, to}){
    const { token } = useContext(AuthContext);

    if(!token){
        return <Navigate to={to} />
    }

    return(
        <>
            <Route path={path} element={children} />
        </>
    )
}

export default PrivateRoute;