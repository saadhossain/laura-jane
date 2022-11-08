import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config'
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    //Create an Auth for login and Registration
    const auth = getAuth(app);
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

    const userInfo = {userRegistration, updateUser}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;