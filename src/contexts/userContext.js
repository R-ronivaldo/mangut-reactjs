import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [catalogs, setCatalogs] = useState([{}]);
    const [token, setToken] = useState({});
    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadStoragedData(){
            const storageUser = localStorage.getItem('@MANGUT:user');
            const storageCatalogs = localStorage.getItem('@MANGUT:catalogs');
            const storageToken = localStorage.getItem('@MANGUT:token');
            const storageSigned = localStorage.getItem('@MANGUT:signed');

            if (storageUser && storageToken && storageSigned){
                setUser(JSON.parse(storageUser));
                setCatalogs(JSON.parse(storageCatalogs));
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
            getCatalogs(response.data.user._id);
        }
    }

    async function getCatalogs (idUser) {
        const authToken = token;

        const response = await api.get(`/catalog/profileid/${idUser}`, { headers: { Authorization: authToken } });
        
        setCatalogs(response.data);
        localStorage.setItem('@MANGUT:catalogs', JSON.stringify(response.data));

    }

    async function singOut() {
        localStorage.removeItem('@MANGUT:user');
        localStorage.removeItem('@MANGUT:catalogs');
        localStorage.removeItem('@MANGUT:token');
        localStorage.removeItem('@MANGUT:signed');
        setUser({});
        setCatalogs([{}]);
        setToken({});
        setSigned(false);
    }
    
    return(
        <UserContext.Provider value={{ signed, user, catalogs, token, loading, getUser, singOut }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;