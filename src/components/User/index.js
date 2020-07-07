import React, { useContext } from 'react';
import userContext from '../../contexts/userContext';

const User = () => {
    const context = useContext(userContext);

    const users = context.user.map(user => (
        <div key={user.id}>{user.name} - {user.secodName} - {user.email} - {user.cpf}</div>
    ));
    return (
        <div>
            {users}
        </div>
    );
}

export default User;