import React, { useState, useEffect } from 'react';

import AdMiniature from '../AdMiniature';
import { Link } from 'react-router-dom';

import { fetchAds } from '../../api';
import carImg from '../../img/car.png';

const NewArrivals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [Ads, setAds] = useState([]);
    useEffect(() => {
        fetchAds().then(({ data }) => {
            setAds(data);
        });
    }, []);
    return (
        <div className='new-arrivals'>
            <h2>New Arrivals</h2>
            <div className='gallery'>
                {Ads.slice(0, 3).map((x) => {
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
            <Link to='/all-ads'>
                <button className='red-btn show-more-btn'>Show More</button>
            </Link>
        </div>
    );
};

export default NewArrivals;
