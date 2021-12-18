import React, { useState } from 'react';

const RegisterForm = (props) => {
    const { photo } = props;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const registerButtonHandler = () => {
        if (password === password2) {
            const sendInformation = {
                name,
                surname,
                email,
                birthday,
                city,
                phone,
                password,
                photo,
            };
        }
    };
    return (
        <div className='register-wrapper'>
            <div className='register-form-wrapper'>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Name:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Surname:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Email:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Birthday:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>City:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Phone:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Password:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Password:</p>
                    <input
                        type='text'
                        className='register-form-input'
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
            </div>
            <div className='register-button-wrapper'>
                <button
                    className='register-button'
                    onClick={registerButtonHandler}
                >
                    REGISTER
                </button>
            </div>
        </div>
    );
};

export default RegisterForm;
