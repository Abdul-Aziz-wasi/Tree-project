import React, { createContext, useEffect, useState } from 'react';
import { Outlet  } from 'react-router';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const valueContext = createContext();

const Root = () => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading]=useState()
   
   

    const handleLogin =(email,password)=>{
       
        return  signInWithEmailAndPassword(auth, email, password)
       
    }

    const handleSignUp =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)

    }
    
    const handleSignOut =()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
    console.log(error)
  // An error happened.
});

    }

    const contextValue ={
        handleLogin,
        handleSignUp,
        setUser,
        user,
        loading,
        handleSignOut
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser)
            setLoading(false)
//   if (currentUser) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = currentUser.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
});
return ()=>{
    unsubscribe()
}
    },[])
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