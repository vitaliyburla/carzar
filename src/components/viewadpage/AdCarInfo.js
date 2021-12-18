import React from 'react';
const AdCarInfo = (props) => {
    const { name, value } = props;
    return (
        <div className='ad-car-info'>
            <h4 className='bold-name'>{name}</h4>
            <h4>{value}</h4>
        </div>
    );
};

export default AdCarInfo;
