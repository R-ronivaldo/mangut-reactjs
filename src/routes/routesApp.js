import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from '../pages/profile';

const routesApp = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Profile} />
            </Switch>
        </BrowserRouter>
);

export default routesApp;