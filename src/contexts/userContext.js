import React, { createContext, useState } from 'react';
import api from '../services/api';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    const getUser = async dataForm => {
        const response = await api.post('/authenticate', {
            email: dataForm.email,
            password: dataForm.password
            });

        setUser(response.data.user);
    }

    console.log(user);
    return(
        <UserContext.Provider value={{ user, getUser }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;