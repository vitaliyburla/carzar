import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import header_svg from '../img/header_black_svg.svg';
import insta from '../img/insta.svg';
import facebook from '../img/facebook.svg';
import telegram from '../img/telegram.svg';
import google from '../img/google.svg';
const Header = () => {
    const pathname = useLocation().pathname.split('/')[1];
    return (
        <div className='header'>
            <div className='links'>
                <div className='logo'>
                    <h1>
                        <Link to='/'>CarZar</Link>
                    </h1>
                </div>
                <div className='black-bg'>
                    <img src={header_svg} alt='header bg' />
                    <div className='icons-social'>
                        <div className='empty'></div>
                        <div className='icons'>
                            <a
                                href='https://web.telegram.org/#/login'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={telegram} alt='telegram link' />
                            </a>
                            <a
                                href='https://www.google.com/intl/ru/gmail/about/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={google} alt='google link' />
                            </a>
                            <a
                                href='https://www.instagram.com/?hl=ru'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={insta} alt='instagram link' />
                            </a>
                            <a
                                href='https://www.facebook.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={facebook} alt='facebook link' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-items'>
                <ul className='menu'>
                    <li className={pathname === '' ? 'active' : ''}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={pathname === 'all-ads' ? 'active' : ''}>
                        <Link to='/all-ads'>All Ads</Link>
                    </li>
                </ul>
                <div className='login'>
                    <Link className='sell-link' to='/new-ad'>
                        <button
                            className={
                                pathname === 'new-ad'
                                    ? 'sell-car-btn red-btn red-btn-active active'
                                    : 'sell-car-btn red-btn'
                            }
                        >
                            Sell a car
                        </button>
                    </Link>
                    <ul>
                        <li className={pathname === 'register' ? 'active' : ''}>
                            <Link to='/register'> Register</Link>
                        </li>
                        <li className={pathname === 'login' ? 'active' : ''}>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
