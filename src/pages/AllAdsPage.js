import React, { useState, useEffect } from 'react';
import AdMiniature from '../components/AdMiniature';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../scss/all_ads_page.css';
import SelectItem from '../components/SelectItem';

import database from '../database/database';
import { fetchAds } from '../api';
import carImg from '../img/car.png';

const AllAdsPage = () => {
    const [Ads, setAds] = useState([]);
    useEffect(() => {
        fetchAds().then(({ data }) => {
            setAds(data);
        });
    }, []);

    return (
        <>
            <Header />
            <hr />
            <div className='all-ads-page'>
                <div className='filters'></div>
                <div className='all-ads-container'>
                    <h2>All ads</h2>
                    <div className='ad-miniatures-wrapper'>
                        {Ads.map((x) => {
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
            </div>

            <Footer />
        </>
    );
};
export default AllAdsPage;
