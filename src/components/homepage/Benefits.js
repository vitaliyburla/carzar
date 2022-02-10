import React from 'react';
import Circle from './Circle';

const Benefits = () => {
    return (
        <div className='benefits'>
            <div className='parallax'>
                <div className='circles'>
                    <Circle title='Quickly' text='Sell and buy fast!' />
                    <Circle
                        title='Conveniently'
                        text='Have everything close at hand'
                    />
                    <Circle
                        title='Reliably'
                        text='Your car will definitely be sold!'
                    />
                </div>
            </div>
        </div>
    );
};
export default Benefits;
