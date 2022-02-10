import React, { useState } from 'react';
import Header from '../components/Header';
import PhotoChooser from '../components/PhotoChooser';
import CarInfoDescritpion from '../components/newadpage/CarInfoDescription';
import Footer from '../components/Footer';
import '../scss/new_ad_page.css';

const NewAdPage = () => {
    const [photo, setPhoto] = useState(null);
    return (
        <>
            <Header />
            <hr />
            {localStorage.getItem('userId') ? (
                <div className='info-body-container'>
                    <PhotoChooser
                        title='PLEASE CHOOSE CAR PHOTOS'
                        setPhoto={setPhoto}
                        photo={photo}
                    />
                    <CarInfoDescritpion photo={photo} />
                </div>
            ) : (
                <div className='info-body-container'>
                    <div className='error-message'>
                        <h2>Please login first!</h2>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};
export default NewAdPage;
