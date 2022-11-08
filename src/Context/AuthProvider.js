import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    //Create an Auth for login and Registration
    const auth = getAuth(app);
    //Create a provider for google
    const googleProvider = new GoogleAuthProvider()
    //Create a provider for Github login
    const githubProvider = new GithubAuthProvider()
    //Set User to a State
    const [user, setUser] = useState()
    //Create a Loading state to prevent system return user to login page every time refresh the page if he/she visit private route
    const [loading, setLoading] = useState(true)
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
    //Handle Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //Handle Github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    //Get the Current user from the Auth State and set to user State
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [auth])
    const userInfo = {user, userRegistration, updateUser, userLogin, googleLogin, githubLogin, logOut, loading}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;