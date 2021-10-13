import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import authInitialization from "../firebase/firebase.initial";

authInitialization();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    //google sign in config
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider)


    }
    //observe whether user auth state change or not.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        });
    }
    return {
        user,
        error,
        googleSignin,
        logout
    }
}
export default useFirebase;