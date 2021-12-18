import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProfileInfo from '../components/profilepage/ProfileInfo';
import circle from '../img/circle_grey.png';
import red_car from '../img/red_car.png';
import '../scss/profile_page.css';
import AdMiniature from '../components/AdMiniature';
const ProfilePage = () => {
    return (
        <>
            <Header />
            <hr />
            <div className='profile-info'>
                <img src={circle} alt='circle' />
                <div className='profile-info-wrapper'>
                    <ProfileInfo title='Name' value='Ivan Ivanov' />
                    <ProfileInfo title='Email' value='01.01.2000' />
                    <ProfileInfo title='Birthday' value='Kiev' />
                    <ProfileInfo title='City' value='+38067000000' />
                    <ProfileInfo title='Password' value='parol_admina' />
                    <button className='red-btn change-data'>
                        Change User Data
                    </button>
                </div>
            </div>
            <hr />
            <div className='user-ads-container'>
                <h3>My Ads</h3>
                <div className='user-ads'>
                    <AdMiniature
                        name='Lightning MCQUEEN'
                        picture={red_car}
                        price='30000'
                    />
                    <AdMiniature
                        name='Lightning MCQUEEN'
                        picture={red_car}
                        price='30000'
                    />
                    <AdMiniature
                        name='Lightning MCQUEEN'
                        picture={red_car}
                        price='30000'
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ProfilePage;
