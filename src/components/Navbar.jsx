import React, { useContext,  useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

 



  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <li><NavLink to="/" className="text-green-600">Home</NavLink></li>
      <li><NavLink to="/allplants" className="text-green-600">All Items</NavLink></li>
      <li><NavLink to="/about" className="text-green-600">About Us</NavLink></li>
      <li><NavLink to="/contact" className="text-green-600">Contact</NavLink></li>
	  
      {user && <li><NavLink to="/dashboard" className="text-green-600">Dashboard</NavLink></li>}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-green-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        <NavLink to="/" className="text-green-700 font-bold text-2xl">🌱 Planting</NavLink>

       
        <ul className="hidden lg:flex space-x-6 font-medium">{navLinks}</ul>

        <div className="flex items-center gap-4">
          

        
          {user && (
            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full lg:block" />
          )}

         
          {user ? (
            <button onClick={signOutUser} className="text-red-600 font-semibold">Logout</button>
          ) : (
            <button onClick={() => navigate('/login')} className="text-green-700 font-semibold">Login</button>
          )}

          
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <ul className="px-6 pb-4 space-y-3 font-medium lg:hidden bg-green-50 dark:bg-gray-900">
          {navLinks}
          <li>
            {user ? (
              <button onClick={signOutUser} className="text-red-500 font-semibold">Logout</button>
            ) : (
              <button onClick={() => navigate('/login')} className="text-green-700 font-semibold">Login</button>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
