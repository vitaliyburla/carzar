import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileInfo from '../components/profilepage/ProfileInfo';
import userImg from '../img/user.png';
import carImg from '../img/car.png';
import '../scss/profile_page.css';
import AdMiniature from '../components/AdMiniature';
import { useHistory } from 'react-router-dom';
import { fetchUser, fetchUserAds } from '../api';

const ProfilePage = () => {
    const history = useHistory();

    const logoutHandler = () => {
        localStorage.removeItem('userId');
        history.push('/');
    };

    const [user, setUser] = useState(null);
    const [ads, setAds] = useState(null);

    useEffect(() => {
        fetchUser(localStorage.getItem('userId')).then(({ data }) => {
            setUser(data);
        });
        fetchUserAds(localStorage.getItem('userId')).then(({ data }) => {
            setAds(data);
        });
    }, []);
    return (
        <>
            <Header />
            <hr />
            <div className='profile-info'>
                <img src={userImg} alt='circle' />
                {user && (
                    <div className='profile-info-wrapper'>
                        <ProfileInfo
                            title='Name'
                            value={`${user.firstName} ${user.secondName}`}
                        />
                        <ProfileInfo title='Email' value={user.email} />
                        <ProfileInfo
                            title='Phone number'
                            value={user.phoneNumber}
                        />
                        <button
                            className='red-btn change-data'
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
            <hr />
            <div className='user-ads-container'>
                <h3>My Ads</h3>
                <div className='user-ads'>
                    {ads &&
                        ads.map((x) => {
                            return (
                                <AdMiniature
                                    id={x.id}
                                    name={x.carDto.carModelDto.name}
                                    picture={x.picture ? x.picture : carImg}
                                    price={x.price}
                                />
                            );
                        })}
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ProfilePage;
