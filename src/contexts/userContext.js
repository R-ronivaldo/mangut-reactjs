import React, { createContext, useState } from 'react';
import api from '../services/api';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});
    const [signed, setSigned] = useState(false);
    
    async function getUser (dataForm) {
        const response = await api.post('/authenticate', {
            email: dataForm.email,
            password: dataForm.password
            });

        setUser(response.data.user);

        setToken(response.data.token);

        if(response.status === 200){
            setSigned(true);
        }
    
    }
    
    return(
        <UserContext.Provider value={{ signed, user, token, getUser }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;