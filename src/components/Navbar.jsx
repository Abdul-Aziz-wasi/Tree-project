import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate =useNavigate()
    const {pathname} =useLocation()
    
    return (
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<NavLink  aria-label="Back to homepage" className="flex items-center p-2">
            <p className='text-green-700 font-bold text-2xl'>Trees</p>
		
		</NavLink>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink to="/"  className="flex items-center px-4 -mb-1  ">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/allplants' className="flex items-center px-4 -mb-1 ">All Plants</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/addplants' className="flex items-center px-4 -mb-1 
                ">Add plants</NavLink>
			</li>
			<li className="flex">
				<NavLink to='/myplants' className="flex items-center px-4 -mb-1 ">My Plants</NavLink>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button onClick={()=>navigate('/login')} className={`self-center px-8 py-3 rounded ${pathname =='/login'?"text-blue-600":""}`}>Sign in</button>
			<button onClick={()=>navigate('/signup')}className={`self-center px-8 py-3 rounded ${pathname =="/signup"?"text-blue-600":""}`}>Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Navbar;