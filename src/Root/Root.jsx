import React, { createContext, useEffect, useState } from 'react';
import { Outlet  } from 'react-router';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
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

    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)

    }
    
    const handleSignOut =()=>{
        signOut(auth).then(() => {
             Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign out successfull",
                showConfirmButton: false,
                timer: 1500
                });
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
        handleSignOut,
        updateUser
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
            <Footer></Footer>
           </valueContext.Provider>
        </div>
    );
};

export default Root;