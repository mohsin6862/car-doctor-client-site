import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading ,setLoading]=useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const LogIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
      }


    const UserInfo ={

        user,
        loading,
        createUser,
        LogIn,

    }
    
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;