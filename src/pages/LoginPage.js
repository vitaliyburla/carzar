import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginForm from '../components/loginpage/LoginForm';
import '../scss/login_page.css';

const LoginPage = () => {
    return (
        <>
            <Header />
            <hr />
            <div className='login-page'>
                <LoginForm />
            </div>
            <Footer />
        </>
    );
};
export default LoginPage;
