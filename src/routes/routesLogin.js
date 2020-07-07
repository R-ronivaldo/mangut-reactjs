import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserProvider from '../contexts/userContext';
import Login from '../components/Login';

const routesLogin = () => (
    <UserProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    </UserProvider>
);

export default routesLogin;