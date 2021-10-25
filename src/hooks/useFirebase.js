import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const auth = getAuth();

    const [users, setUsers] = useState({})
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
    }
//observe userState Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        });
        return () => unsubscribed;
    },[])
    const logOut = () => {
        signOut(auth)
         .then(() => {})
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;