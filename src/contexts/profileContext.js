import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [catalogs, setCatalogs] = useState([]);
    const [products, setProducts] = useState([]);
    const [evaluations, setEvaluations] = useState([]);
    const [notifies, setNotifies] = useState([]);

    const [token, setToken] = useState({});
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        function loadStoragedData(){
            const storageUser = localStorage.getItem('@MANGUT:user');
            const storageCatalogs = localStorage.getItem('@MANGUT:catalogs');
            const storageToken = localStorage.getItem('@MANGUT:token');
            const storageSigned = localStorage.getItem('@MANGUT:signed');
            const storageProducts = localStorage.getItem('@MANGUT:products');
            const storageEvaluations = localStorage.getItem('@MANGUT:evaluations');
            const storageNotifies = localStorage.getItem('@MANGUT:notifies');

            if (storageUser && storageToken && storageSigned){
                setUser(JSON.parse(storageUser));
                setCatalogs(JSON.parse(storageCatalogs));
                setProducts(JSON.parse(storageProducts));
                setEvaluations(JSON.parse(storageEvaluations));
                setNotifies(JSON.parse(storageNotifies));
                setToken(storageToken);
                setSigned(storageSigned);
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
            localStorage.setItem('@MANGUT:signed', true);
            getCatalogs(response.data.user._id);
        }
    }

    async function getCatalogs (idUser) {
        const authToken = token;

        const response = await api.get(`/catalog/profileid/${idUser}`, { headers: { Authorization: authToken } });
        
        setCatalogs(response.data);
        localStorage.setItem('@MANGUT:catalogs', JSON.stringify(response.data));

        response.data.map(data => (
            getProducts(data._id)
        ));
    }

    async function getProducts(idCatalog){
        const response = await api.get(`/product/catalogid/${idCatalog}`);
        const datasProducts = products
        response.data.map(data => (
            datasProducts.push(data)
        ));
        
        setProducts([datasProducts]);
        localStorage.setItem('@MANGUT:products', JSON.stringify(datasProducts));
        
        products.map(product => (
            getEvaluations(product._id)
        ));

        products.map(product => (
            getNotifies(product._id)
        ));
    }

    async function getEvaluations(idProduct){
        const response = await api.get(`/evaluation/productid/${idProduct}`);
        
        const datasEvaluations = evaluations;
        
        response.data.map(data => (
            datasEvaluations.push(data)
        ));

        setEvaluations([datasEvaluations]);
        localStorage.setItem('@MANGUT:evaluations', JSON.stringify(datasEvaluations));
    }

    async function getNotifies(idProduct){
        const response = await api.get(`/notify/productid/${idProduct}`);
        
        const datasNotifies = notifies;
        
        response.data.map(data => (
            datasNotifies.push(data)
        ));
        
        setNotifies([datasNotifies]);
        localStorage.setItem('@MANGUT:notifies', JSON.stringify(datasNotifies));
    }

    async function singOut() {
        localStorage.removeItem('@MANGUT:user');
        localStorage.removeItem('@MANGUT:catalogs');
        localStorage.removeItem('@MANGUT:products');
        localStorage.removeItem('@MANGUT:evaluations');
        localStorage.removeItem('@MANGUT:notifies');
        localStorage.removeItem('@MANGUT:token');
        localStorage.removeItem('@MANGUT:signed');
        setUser({});
        setCatalogs([{}]);
        setToken({});
        setSigned(false);
    }
    
    return(
        <ProfileContext.Provider value={{ signed, user, catalogs, products, evaluations, notifies, token, getUser, singOut }}>
            { children }
        </ProfileContext.Provider>
    );
}

export default ProfileProvider;