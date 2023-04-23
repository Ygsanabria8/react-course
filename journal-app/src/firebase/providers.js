import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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