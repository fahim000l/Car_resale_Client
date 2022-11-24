import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        setLoader(false);
        return signInWithPopup(auth, googleProvider);
    };
    const updateUserProfile = (profile) => {
        setLoader(false);
        return updateProfile(auth.currentUser, profile)
    };
    const signIn = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const authInfo = {
        user,
        loader,
        createUser,
        googleSignIn,
        updateUserProfile,
        signIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;