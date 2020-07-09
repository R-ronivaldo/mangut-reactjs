import React from 'react';

import Routes from './routes';
import Header from './components/Header';

import ProfileProvider from './contexts/profileContext';

const App = () => (
    <div className="App">
        <Header />
        <ProfileProvider>
            <Routes />
        </ProfileProvider>
    </div>
);

export default App;
