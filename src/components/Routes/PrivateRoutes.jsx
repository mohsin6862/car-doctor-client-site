import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {



    const {user,loading}= useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <progress className="progress progress-success w-56"></progress>
    }
    if(user?.email){
       return children;
    }
    return <Navigate to='/login' state={{fron:location}} replace></Navigate>
    
};

export default PrivateRoutes;