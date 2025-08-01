import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { useEffect } from 'react';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


  // Create User by userName and Password
    const createUser = (email, password, fullName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: fullName
                })
                    .then(() => userCredential)
            })
            .finally(() => setLoading(false))
    }

    //sigIn with google
    const sigInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    ///login
    const logIn = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email,password)
       .finally(()=>{
          setLoading(false)
       })

    }
    // logout
    const logOut= () =>{
        setLoading(true)
        return signOut(auth)
        .finally(()=>{
            setLoading(false)
        })

    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)

        })

        return ()=>{
            unsubscribe()
        }



    },[])



    const authInfo = {
        user, loading, createUser,logIn, logOut,sigInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;