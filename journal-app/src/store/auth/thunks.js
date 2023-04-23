import { registerUserWithCredentials, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAunthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }
        
        dispatch(login(result));
    };
};

export const startCreatingUserCredentials = ({ email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithCredentials({ email, password, displayName});

        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }
        
        dispatch(login(result));
    };
};