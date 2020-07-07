import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';

const routesLogin = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
);

export default routesLogin;