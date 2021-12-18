import React, { useState, useEffect } from 'react';
import AdMiniature from '../components/AdMiniature';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../scss/all_ads_page.css';
import SelectItem from '../components/SelectItem';

import database from '../database/database';

const AllAdsPage = () => {
    let arr = [0, 1, 2, 3, 4];

    const [Ads, setAds] = useState([]);
    useEffect(() => {
        setAds(database);
    }, []);

    return (
        <>
            <Header />
            <hr />
            <div className='all-ads-page'>
                <div className='filters'>
                    <div className='all-ads-select-items'>
                        <SelectItem title='Make' selectItems={arr} />
                        <SelectItem title='Model' selectItems={arr} />
                        <SelectItem title='Transmission' selectItems={arr} />
                        <SelectItem title='Body Color' selectItems={arr} />
                        <SelectItem title='Year Min' selectItems={arr} />
                        <SelectItem title='Year Max' selectItems={arr} />
                        <SelectItem title='Mileage Min' selectItems={arr} />
                        <SelectItem title='Mileage Max' selectItems={arr} />
                        <SelectItem title='Price Min' selectItems={arr} />
                        <SelectItem title='Price Max' selectItems={arr} />
                        <SelectItem title='Condition' selectItems={arr} />
                        <SelectItem title='Bodystyle' selectItems={arr} />
                    </div>
                </div>
                <div className='all-ads-container'>
                    <h2>All ads</h2>
                    <div className='ad-miniatures-wrapper'>
                        {Ads.map((x) => {
                            return (
                                <AdMiniature
                                    id={x.id}
                                    name={`${x.make} ${x.model}`}
                                    picture={x.picture}
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
