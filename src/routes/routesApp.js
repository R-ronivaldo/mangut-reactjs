import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserProvider from '../contexts/userContext';
import User from '../components/User';

const routesApp = () => (
    <UserProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={User} />
            </Switch>
        </BrowserRouter>
    </UserProvider>
);

export default routesApp;