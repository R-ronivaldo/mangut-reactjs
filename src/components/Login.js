import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';

const Login = () => {
    const { getUser } = useContext(UserContext);
    const [dataForm, setDataForm] = useState();

    const handleFormSubmit = async e => {
        e.preventDefault();
        getUser(dataForm);
    }

    const handleInputChange = e => {
        setDataForm({ ...dataForm,
            [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="email" id="email" onChange={handleInputChange} />
                <input type="password" name="password" id="password" onChange={handleInputChange} />
                <button>SingIn</button>
            </form>
        </div>
    );
}

export default Login;