import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init'
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])

    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}
export default useFirebase;