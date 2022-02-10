import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { signIn } from '../../api';

const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandle = () => {
        const sendInformation = {
            userEmail: email,
            password: password,
        };
        signIn(sendInformation).then((res) => {
            if (res.status === 200) {
                localStorage.setItem('userId', res.data.id);
                history.push('/my-profile');
            }
        });
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
            <button className='red-btn login-btn' onClick={loginHandle}>
                Login
            </button>
        </div>
    );
};
export default LoginForm;
