import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const valueContext = createContext();

const Root = () => {
    const handleLogin =(email,password)=>{
        console.log(email,password)
        return  signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignUp =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)

    }

    const contextValue ={
        handleLogin,
        handleSignUp,
    }
    return (
        <div >
           <valueContext.Provider value={contextValue}>
             <Navbar></Navbar>
            <Outlet></Outlet>
           </valueContext.Provider>
        </div>
    );
};

export default Root;