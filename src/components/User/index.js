import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

const User = () => {
    const { user, token, singOut } = useContext(UserContext);

    function handleSignOut() {
        singOut();
    }

    return (
        <div>
            <div key={user.id}>Nome: {user.name} - Sobrenome: {user.secondName} - Email: {user.email} - Cpf: {user.cpf}</div>
            <div key={user.id}>Token: {token}</div>
            <div><button onClick={handleSignOut}>Sing out</button></div>
        </div>
    );
}

export default User;