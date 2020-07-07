import React, { useContext } from 'react';

import { UserContext } from '../contexts/userContext';

import RoutesLogin from './RoutesLogin';
import RoutesApp from './RoutesApp';

const Routes = () => {
    const { user, signed, token } = useContext(UserContext);
    console.log(signed);
    console.log(token);
    console.log(user);
    return signed ? <RoutesApp /> : <RoutesLogin />
};

export default Routes;