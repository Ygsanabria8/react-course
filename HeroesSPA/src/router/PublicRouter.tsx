import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({ children }: any) => {

    const { authState }: any =  useContext(AuthContext);

    return (authState.logged)
        ? <Navigate to='/marvel' />
        : children;
}
