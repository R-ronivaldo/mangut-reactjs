import React from 'react';

import UserProvider from './contexts/userContext';
import Login from './components/Login';

const App = () => {
    return(
        <UserProvider>
            <Login></Login>
        </UserProvider>
    );
}

export default App;
