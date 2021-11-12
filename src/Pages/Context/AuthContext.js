import React, {  createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const ContextProvider = createContext()
const AuthContext = ({ children }) => {
    const allContext = useFirebase()
    return (
        <ContextProvider.Provider value={allContext}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthContext;