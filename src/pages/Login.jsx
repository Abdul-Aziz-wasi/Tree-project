import React, { use } from 'react';

import signInLotti from '../assets/signup.json'
import Lottie from 'lottie-react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const SignIn = () => {
        const {signInUser,signInWithGoogle}=use(AuthContext)
        const location = useLocation();

        const navigate= useNavigate()

        const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result)
            const from = location.state?.from?.pathname || '/';
navigate(from, { replace: true });
        }).catch(error=>{
            console.log(error)
        })

    }
    
    
       const handleSignIn = (e) => {
  e.preventDefault();
  const form = e.target;

  const email = form.email.value;
  const password = form.password.value;

  signInUser(email, password)
    .then(result => {
      console.log("Sign in success:", result.user);
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "LogIn successful",
  showConfirmButton: false,
  timer: 1500
});    
const from = location.state?.from?.pathname || '/';
navigate(from, { replace: true });
    })
    .catch(error => {
      console.error("Sign in error:", error.message);
      
Swal.fire("Something Wrong! Try again");
       
    });
};

    return (
        <div className="hero bg-green-100 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-6 border border-amber-50 rounded-3xl w-full">
    <div className="text-center  lg:text-left">
     <Lottie style={{width:'400px'}} animationData={signInLotti} loop={true}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="mb-3 text-3xl font-semibold text-center pt-6">Sign In your account</h2>
	<p className="text-sm text-center dark:text-gray-600">Don't have an account? 
		<NavLink to='/signup' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600"> Sign Up here</NavLink>
	</p>
      <div className="card-body">
       <form onSubmit={handleSignIn}>
         <fieldset className="fieldset">
          {/* <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" /> */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* <label className="label">Photo URL</label>
          <input type="photo" name='photo' className="input" placeholder="Photo url" /> */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn bg-green-600 text-white rounded hover:bg-green-700 mt-4">Sign In</button>

        
        </fieldset>
       </form>
         
            <button onClick={handleGoogleSignIn} className="btn bg-green-600 text-white rounded hover:bg-green-700 border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Sign In with Google
</button>
        
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;