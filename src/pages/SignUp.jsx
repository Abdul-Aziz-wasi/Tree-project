import Lottie from 'lottie-react';
import React, { use } from 'react';
import signupLotti from '../assets/signIn.json'

import { NavLink, useLocation, useNavigate } from 'react-router';
import { motion, scale } from "motion/react"
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';


const Signup = () => {
    const {createUser,signInWithGoogle}=use(AuthContext);
    const location = useLocation();

    const navigate =useNavigate()

    const handleGoogleSignUp =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result)
           const from = location.state?.from?.pathname || '/';
navigate(from, { replace: true });
        }).catch(error=>{
            console.log(error)
        })

    }


    const handleSignUp =(e)=>{
        e.preventDefault()
        const form =e.target;
        const name=form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(name,photo,email,password)

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/

  if (password.length < 6) {
   
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Password must be at least 6 characters long.",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    return;
  }

  if (!uppercaseRegex.test(password)) {
   
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Password must contain at least one uppercase letter.",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    return;
  }

  if (!lowercaseRegex.test(password)) {
   
    
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Password must contain at least one lowercase letter.",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    return;
  }
  if (!specialCharacter.test(password)) {
   
    
     Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Password must contain at least one special character.",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    return;
  }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
             Swal.fire({
              position: "top-end",
              icon: "success",
              title: "LogIn successful",
              showConfirmButton: false,
              timer: 1500
            });
           const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
        }).catch(error=>{
            console.log(error)
        })

    }



    return (
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.5 }}
  className="bg-green-100 min-h-screen flex items-center justify-center px-4 py-12"
>
  <div className="max-w-6xl w-full flex flex-col lg:flex-row-reverse items-center justify-center bg-white rounded-3xl shadow-md p-8">
    
    
    <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
      <Lottie style={{ width: '100%', maxWidth: '400px' }} animationData={signupLotti} loop={true} />
    </div>

   
    <div className="w-full lg:w-1/2">
      <div className="bg-base-100 shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-green-700">Sign up your account</h2>
        <p className="text-sm text-center mb-6">
          Already have an account? 
          <NavLink to="/login" className="text-blue-600 hover:underline ml-1">Sign In here</NavLink>
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input type="text" name="name" className="input input-bordered w-full" placeholder="Your name" required />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" placeholder="Your email" required />
          </div>
          <div>
            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input input-bordered w-full" placeholder="Photo URL" />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />
          </div>

          <div className="text-right">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <button type="submit" className="btn w-full bg-green-600 text-white hover:bg-green-700">
            Sign Up
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignUp} className="btn w-full bg-red-500 hover:bg-red-600 text-white flex gap-2">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</motion.div>

    );
};

export default Signup;