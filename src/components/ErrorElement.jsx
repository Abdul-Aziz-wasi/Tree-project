import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';

const ErrorElement = () => {
    const navigate=useNavigate()
    return (
        
       <div className='p-24'>
        
         <div role="alert" className="alert alert-error mt-12 ">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! </span>

  <button onClick={()=>navigate('/')} className='btn btn-primary'>Go home</button>
</div>
       </div>
    );
};

export default ErrorElement;