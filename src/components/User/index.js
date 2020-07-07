import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

const User = () => {
    const { user, token } = useContext(UserContext);
    return (
        <div>
            <div key={user.id}>Nome: {user.name} - Sobrenome: {user.secondName} - Email: {user.email} - Cpf: {user.cpf}</div>
            <div key={user.id}>Token: {token}</div>
        </div>
    );
}

export default User;