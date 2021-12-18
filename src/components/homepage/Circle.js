import React from 'react';
import circle_bg from '../../img/Circle_bg.svg';
const Circle = (props) => {
    const { title, text } = props;
    return (
        <div className='circle'>
            <div className='circle-title'>
                <h2>{title}</h2>
            </div>
            <div className='circle-text'>
                <h4>{text}</h4>
            </div>
        </div>
    );
};
export default Circle;
