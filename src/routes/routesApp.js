import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import User from '../components/User';

const routesApp = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={User} />
            </Switch>
        </BrowserRouter>
);

export default routesApp;