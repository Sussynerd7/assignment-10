import React, { useState, useEffect } from 'react';
import { 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';

import { auth } from '../firebaseinit/firebaseinit';
import { AuthContext } from './Authcontext';

const googleProvider = new GoogleAuthProvider(); 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const logOut = () => {
    return signOut(auth);

};
    const createUseremail = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUseremail = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
const updatephotousername = (user, username, photoURL) => {
    return updateProfile(user, {
        displayName: username,
        photoURL: photoURL
    });
};
   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false); 
        });

        return () => unsubscribe();
    }, []); 

    const authInfo = {
        user,
        updatephotousername,
        
        setUser,
        loading,
        googleSignIn,
        createUseremail,
        signInUseremail,
        logOut,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
        // <AuthContext.Provider value={authInfo}>
        //     {children}
        // </AuthContext.Provider>
    );
};

export default AuthProvider;
