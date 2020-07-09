import React, { useContext } from 'react';

import { ProfileContext } from '../contexts/profileContext';

import RoutesLogin from './routesLogin';
import RoutesApp from './RoutesApp';

const Routes = () => {
    const { user, catalogs, products , evaluations, notifies, signed, token } = useContext(ProfileContext);
    console.log(signed);
    console.log(token);
    console.log(user);
    console.log(catalogs);
    console.log(products);
    console.log(evaluations);
    console.log(notifies);

    return signed ? <RoutesApp /> : <RoutesLogin />
};

export default Routes;