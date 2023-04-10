import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return {
        logged: !!user,
        user: user,
    }
};

export const AuthProvider = ({ children }: any) => {
    
    const [authState, authDispatch] = useReducer(authReducer, {}, init);

    const login = (name: string) => {

        const user = {
            id: 'ABC',
            name: name
        };

        const action = {
            type: types.login,
            payload: user,
        };

        localStorage.setItem('user', JSON.stringify(user));
        authDispatch(action);
    };

    const logout = () => {

        const action = {
            type: types.logout,
        };

        localStorage.removeItem('user');
        authDispatch(action);
    };

    return (
        <AuthContext.Provider value={{authState, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
}
