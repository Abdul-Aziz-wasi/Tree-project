import React, { createContext, useEffect, useState } from 'react';
import { Outlet  } from 'react-router';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';

export const valueContext = createContext();

const googleProvider =new GoogleAuthProvider()

const Root = () => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading]=useState()
   
   

    const handleLogin =(email,password)=>{
       
        return  signInWithEmailAndPassword(auth, email, password)
       
    }

    const handleSignUp =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)

    }

    const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const googleLogin=()=>{
    signInWithPopup(auth, googleProvider)
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
        googleLogin,
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
            <Footer></Footer>.
           
           </valueContext.Provider>
          
        </div>
    );
};

export default Root;