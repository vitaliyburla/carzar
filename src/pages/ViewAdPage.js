import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AdCarInfo from '../components/viewadpage/AdCarInfo';
import '../scss/view_ad_page.css';
import carImg from '../img/car.png';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { fetchAd } from '../api';

const ViewAdPage = (props) => {
    const { src, name } = props;
    const { id } = useParams();

    const [currentAd, setCurrentAd] = useState(null);
    useEffect(() => {
        fetchAd(id).then(({ data }) => {
            setCurrentAd(data);
        });
    }, []);
    return (
        <>
            {currentAd && (
                <>
                    <Header />
                    <hr />
                    <div className='view-ad-container'>
                        <div className='ad-car-img'>
                            <img src={carImg} alt={name} />
                        </div>
                        <div className='ad-car-info-wrapper'>
                            <h2>Price: {currentAd.price}$</h2>
                            <AdCarInfo
                                name='Description'
                                value={currentAd.description}
                            />
                            <h2>Information</h2>
                            <AdCarInfo
                                name='Owner'
                                value={`${currentAd.userDto.firstName} ${currentAd.userDto.secondName}`}
                            />
                            <AdCarInfo
                                name={"Owner's phone number"}
                                value={currentAd.userDto.phoneNumber}
                            />
                            <AdCarInfo
                                name='Car Type'
                                value={currentAd.carDto.carTypeDto.name}
                            />
                            <AdCarInfo
                                name='Body Type'
                                value={currentAd.carDto.bodyTypeDto.name}
                            />
                            <AdCarInfo
                                name='Model'
                                value={currentAd.carDto.carModelDto.name}
                            />
                            <AdCarInfo
                                name='Mileage'
                                value={`${currentAd.mileage} km`}
                            />
                            <AdCarInfo
                                name='Body Color'
                                value={currentAd.color}
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
