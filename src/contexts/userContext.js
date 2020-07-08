import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});
    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadStoragedData(){
            const storageUser = localStorage.getItem('@MANGUT:user');
            const storageToken = localStorage.getItem('@MANGUT:token');
            const storageSigned = localStorage.getItem('@MANGUT:signed');

            if (storageUser && storageToken && storageSigned){
                setUser(JSON.parse(storageUser));
                setToken(storageToken);
                setSigned(storageSigned);
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);
    
    async function getUser (dataForm) {
        const response = await api.post('/authenticate', {
            email: dataForm.email,
            password: dataForm.password
            });

        setUser(response.data.user);
        localStorage.setItem('@MANGUT:user', JSON.stringify(response.data.user));

        setToken(response.data.token);
        localStorage.setItem('@MANGUT:token', response.data.token);

        if(response.status === 200){
            setSigned(true);
            localStorage.setItem('@MANGUT:signed', signed);
        }
    
    }

    async function singOut() {
        localStorage.removeItem('@MANGUT:user');
        localStorage.removeItem('@MANGUT:token');
        localStorage.removeItem('@MANGUT:signed');
        setUser({});
        setToken({});
        setSigned(false);
    }
    
    return(
        <UserContext.Provider value={{ signed, user, token, loading, getUser, singOut }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;