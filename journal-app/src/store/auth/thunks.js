import { registerUserWithCredentials, signInWithGoogle, loginWithCredentials, logoutFirebase} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { clearNotesLogout } from "../journal";

export const checkingAunthentication = () => {
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

export const loginUserWithCredentials = ({ email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithCredentials({ email, password});

        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }
        
        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout());
        dispatch(clearNotesLogout());
    };
};