import React, { useContext } from 'react';

import { UserContext } from '../contexts/userContext';

import RoutesLogin from './routesLogin';
import RoutesApp from './RoutesApp';

const Routes = () => {
    const { user, catalogs, signed, token } = useContext(UserContext);
    console.log(signed);
    console.log(token);
    console.log(user);
    console.log(catalogs);

    return signed ? <RoutesApp /> : <RoutesLogin />
};

export default Routes;