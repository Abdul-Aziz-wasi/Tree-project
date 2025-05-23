import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';


import Swal from 'sweetalert2';
import { valueContext } from '../Root/Root';

const SignUp = () => {
    const {handleSignUp,updateUser,setUser}=useContext(valueContext)
    const navigate =useNavigate()

	 const location=useLocation()
    const from =location?.state?.from


    const handleSubmit=(e)=>{
        e.preventDefault();
       const name =e.target.name.value;
       const photo =e.target.photo.value;
       const email =e.target.email.value;
       const password=e.target.password.value;
       console.log(name,photo)

       if(password.length < 6){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Password must be 6 character!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        
        return
       }
       if(!/[a-z]/.test(password)){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "password must contain a lowercase!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        return
       }
       if(!/[A-Z]/.test(password)){
       Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "password contain must be a upper case!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        return
       }

        handleSignUp(email,password)
        .then((userCredential) => {
    updateUser({displayName:name, photoUrl:photo}).then(()=>{
      setUser({...user, displayName:name, photoUrl:photo})
    }).catch((error)=>{
      console.log(error)
      setUser(user)

    })
    const user = userCredential.user;
    navigate(from?from:"/")
    console.log(user);

        Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Sign up successfull",
    showConfirmButton: false,
    timer: 1500
    });
    
   
  })

     
    }
    return (
        <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 my-4 bg-black text-white">
	<h2 className="mb-3 text-3xl font-semibold text-center">Sign up to your account</h2>
	<p className="text-sm text-center dark:text-gray-600">Already have an account?
		<NavLink to='/login' className="focus:underline hover:underline">Sign in here</NavLink>
	</p>
	
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form onSubmit={handleSubmit} className="space-y-8">
		<div className="space-y-4">
            <div className="space-y-2">
				<label  className="block text-sm">Name</label>
				<input type="text" name="name"  placeholder="name" className="w-full px-3 py-2 border rounded-md " />
			</div>

            <div className="space-y-2">
				<label  className="block text-sm">Photo URL</label>
				<input type="text" name="photo"  placeholder="photo url" className="w-full px-3 py-2 border rounded-md" />
			</div>


			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
			</div>
			
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
			</div>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md ">Sign up</button>
	</form>
</div>
    );
};

export default SignUp;