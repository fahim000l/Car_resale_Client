import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;