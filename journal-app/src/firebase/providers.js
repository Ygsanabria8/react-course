import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
        
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const registerUserWithCredentials = async ({ email, password, displayName}) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = result.user;

        await updateProfile(FirebaseAuth.currentUser,{displayName: displayName});

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const loginWithCredentials = async ({ email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const user = result.user;

        return {
            ok: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};