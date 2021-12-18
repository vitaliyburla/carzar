import React from 'react';
import empty_img from '../img/car_img_empty.png';
const PhotoChooser = (props) => {
    const { title, setPhoto, photo } = props;

    return (
        <div className='form-file'>
            <h2>{title}</h2>
            <img src={photo ? photo : empty_img} alt='your image'></img>
            <label for='car-img'>Choose file to upload</label>
            <input
                id='car-img'
                type='file'
                accept='image/gif, image/jpeg, image/png'
                onChange={(e) =>
                    setPhoto(URL.createObjectURL(e.target.files[0]))
                }
            />
        </div>
    );
};
export default PhotoChooser;
