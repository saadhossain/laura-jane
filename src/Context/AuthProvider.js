import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    //Create an Auth for login and Registration
    const auth = getAuth(app);
    //Set User to a State
    const [user, setUser] = useState()
    //Create or Register New user using Emai and Password
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Update user displayname and photo/profile picture after registration
    const updateUser = (fullName, profile) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: profile
        })
    }
    //Allow user to login their account using email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Logout User functionality
    const logOut = () => {
        return signOut(auth)
    }
    //Get the Current user from the Auth State and set to user State
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [auth])
    const userInfo = {user, userRegistration, updateUser, userLogin, logOut}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;