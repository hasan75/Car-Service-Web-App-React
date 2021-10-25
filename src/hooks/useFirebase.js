import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.Init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
//observe userState Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;
    },[])
    const logOut = () => {
        signOut(auth)
         .then(() => {})
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;