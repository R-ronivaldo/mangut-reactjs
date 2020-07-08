import React from 'react';

import Routes from './routes';
import Header from './components/Header';

import UserProvider from './contexts/userContext';

const App = () => (
    <UserProvider>
        <Header />
        <Routes />
    </UserProvider>
);

export default App;
