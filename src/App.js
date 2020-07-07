import React from 'react';

import Routes from './routes';

import UserProvider from './contexts/userContext';

const App = () => (
    <UserProvider>
        <Routes />
    </UserProvider>

);

export default App;
