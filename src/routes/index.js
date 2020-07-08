import React, { useContext } from 'react';

import { UserContext } from '../contexts/userContext';

import RoutesLogin from './routesLogin';
import RoutesApp from './RoutesApp';

import ReactLoading from 'react-loading';

const Routes = () => {
    const { user, signed, token, loading } = useContext(UserContext);
    console.log(signed);
    console.log(token);
    console.log(user);

    if(loading) {
        return (
            <ReactLoading type={'spin'} color={'#333'} height={80} width={50} />
        );
    }

    return signed ? <RoutesApp /> : <RoutesLogin />
};

export default Routes;