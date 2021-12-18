import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandle = () => {
        const sendInformation = {
            email,
            password,
        };
    };
    return (
        <div className='login-form'>
            <div className='login-form-wrapper'>
                <h4>Email</h4>
                <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div className='login-form-wrapper'>
                <h4>Password</h4>
                <input
                    type='password'
                    name='password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            <Link className='login-link' to='/my-profile'>
                <button className='red-btn login-btn' onClick={loginHandle}>
                    Login
                </button>
            </Link>
        </div>
    );
};
export default LoginForm;
