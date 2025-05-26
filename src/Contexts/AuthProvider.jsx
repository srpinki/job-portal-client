import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";


const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }
    const signOutUser = () => {
        setloading(true)
        return signOut (auth)
    }

    useState(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloading(false)
            console.log("user from on auth state", currentUser); 
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser

    }
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
