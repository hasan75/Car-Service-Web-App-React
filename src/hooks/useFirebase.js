import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.Init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(()=> setIsLoading(false))
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
            setIsLoading(false)
        });
        return () => unsubscribed;
    },[])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
         .then(() => {})
         .finally(()=> setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;