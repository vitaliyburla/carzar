import React, { useState } from 'react';
import Header from '../components/Header';

import '../scss/register_page.css';

import Footer from '../components/Footer';
import PhotoChange from '../components/registerpage/PhotoChange';
import RegisterForm from '../components/registerpage/RegisterForm';

const RegisterPage = () => {
    const [photo, setPhoto] = useState(null);

    return (
        <>
            <Header />
            <hr />
            <div className='register-page-wrapper'>
                <div className='register-page'>
                    <PhotoChange setPhoto={setPhoto} photo={photo} />
                    <RegisterForm photo={photo} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RegisterPage;
