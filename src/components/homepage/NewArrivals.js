import React from 'react';

import AdMiniature from '../AdMiniature';
import { Link } from 'react-router-dom';

import black_car from '../../img/black_car.png';
import red_car from '../../img/red_car.png';
import yellow_car from '../../img/yellow_car.png';
import white_car from '../../img/white_car.png';

const NewArrivals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='new-arrivals'>
            <h2>New Arrivals</h2>
            <div className='gallery'>
                <AdMiniature
                    name='Lightning MCQUEEN'
                    picture={red_car}
                    price='30000'
                />
                <AdMiniature
                    name='Jackson Storm'
                    picture={black_car}
                    price='41000'
                />
                {/* <Link to='/view-ad-page'> */}
                <AdMiniature
                    name='Shu Todoroki'
                    picture={white_car}
                    price='25000'
                />
                {/* </Link> */}
                <AdMiniature name='Luigi' picture={yellow_car} price='100000' />
            </div>

            <button className='red-btn show-more-btn'>Show More</button>
        </div>
    );
};

export default NewArrivals;
