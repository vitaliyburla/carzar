import React from 'react';
const ProfileInfo = (props) => {
    const { title, value } = props;
    return (
        <div className='profile-info-component'>
            <h4 className='title'>{title}</h4>
            <h4 className='value'>{value}</h4>
        </div>
    );
};
export default ProfileInfo;
