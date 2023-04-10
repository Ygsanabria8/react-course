import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }: any) => {

    const { authState }: any =  useContext(AuthContext);
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (authState.logged)
        ? children
        : <Navigate to='/login' />;
}
