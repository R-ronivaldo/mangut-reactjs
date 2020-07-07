import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import './style.css';

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
        <div className="formLogin">
            <form onSubmit={handleFormSubmit}>
                <label>Email: </label>
                <input type="text" name="email" id="email" onChange={handleInputChange} />
                <br />
                <label>Senha: </label>
                <input type="password" name="password" id="password" onChange={handleInputChange} />
                <br />
                <button>SingIn</button>
            </form>
        </div>
    );
}

export default Login;