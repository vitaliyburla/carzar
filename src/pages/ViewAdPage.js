import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AdCarInfo from '../components/viewadpage/AdCarInfo';
import '../scss/view_ad_page.css';
import lamba from '../img/yellow_car.png';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import database from '../database/database';

const ViewAdPage = (props) => {
    const { src, name } = props;
    const { id } = useParams();

    const [currentAd, setCurrentAd] = useState(null);
    useEffect(() => {
        setCurrentAd(database.find((x) => x.id == id));
    }, []);
    return (
        <>
            {currentAd && (
                <>
                    <Header />
                    <hr />
                    <div className='view-ad-container'>
                        <div className='ad-car-img'>
                            <img src={currentAd.picture} alt={name} />
                        </div>
                        <div className='ad-car-info-wrapper'>
                            <h2>Price: {currentAd.price}$</h2>
                            <h2>Information</h2>
                            <AdCarInfo name='Owner' value={currentAd.owner} />
                            <AdCarInfo
                                name='Body Style'
                                value={currentAd.body_style}
                            />
                            <AdCarInfo name='Make' value={currentAd.make} />
                            <AdCarInfo name='Model' value={currentAd.model} />
                            <AdCarInfo
                                name='Transmission'
                                value={currentAd.transmission}
                            />
                            <AdCarInfo name='Year' value={currentAd.year} />
                            <AdCarInfo
                                name='Mileage'
                                value={currentAd.mileage}
                            />
                            <AdCarInfo
                                name='Condition'
                                value={currentAd.condition}
                            />
                            <AdCarInfo name='City' value={currentAd.city} />
                            <AdCarInfo
                                name='Body Color'
                                value={currentAd.body_color}
                            />
                            <div className='ad-info-buttons'>
                                <button className='red-btn favourites-btn'>
                                    Add To Favourites
                                </button>
                                <button className='red-btn offer-btn'>
                                    Make An Offer
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};
export default ViewAdPage;
