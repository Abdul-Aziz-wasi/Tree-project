import React, { useContext } from 'react';
import { valueContext } from '../Root/Root';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(valueContext);
    const location =useLocation()

    if(loading){
        <div className='w-11/12 mx-auto'> 
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    if(!user || !user?.email){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
   
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;