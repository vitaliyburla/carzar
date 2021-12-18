import React from 'react';
import PhotoChooser from '../PhotoChooser';
const PhotoChange = (props) => {
    const { setPhoto, photo } = props;
    return (
        <div className='photo-change-wrapper'>
            <PhotoChooser
                title='ADD YOUR PHOTO'
                setPhoto={setPhoto}
                photo={photo}
            />
        </div>
    );
};

export default PhotoChange;
