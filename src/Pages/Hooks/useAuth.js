import React, { useContext } from 'react';
import { ContextProvider } from '../Context/AuthContext';

const useAuth = () => {
    const auth = useContext(ContextProvider)
    return auth;
};

export default useAuth;