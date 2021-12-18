import React, { useState } from 'react';
import SelectItem from '../SelectItem';
import PhotoChooser from '../PhotoChooser';
const CarInfoDescritpion = (props) => {
    let arr = [1, 2, 3, 4, 5];
    const { photo } = props;
    const [bodystyle, setBodystyle] = useState(null);
    const [make, setMake] = useState(null);
    const [model, setModel] = useState(null);
    const [transmission, setTransmission] = useState(null);
    const [year, setYear] = useState(null);
    const [mileage, setMileage] = useState(null);
    const [condition, setCondition] = useState(null);
    const [city, setCity] = useState(null);
    const [bodyColor, setBodyColor] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDesctiption] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');

    const placeAnAdHandle = () => {
        const sendInformation = {
            bodystyle,
            make,
            model,
            transmission,
            year,
            mileage,
            condition,
            city,
            bodyColor,
            price,
            description,
            ownerPhone,
            photo,
        };
    };
    return (
        <div className='info-container'>
            <div className='basic-info'>
                <h2>Basic Information</h2>
                <SelectItem
                    title='Bodystyle'
                    selectItems={arr}
                    setItem={setBodystyle}
                />
                <SelectItem title='Make' selectItems={arr} setItem={setMake} />
                <SelectItem
                    title='Model'
                    selectItems={arr}
                    setItem={setModel}
                />
                <SelectItem
                    title='Transmission'
                    selectItems={arr}
                    setItem={setTransmission}
                />
                <SelectItem title='Year' selectItems={arr} setItem={setYear} />
                <SelectItem
                    title='Mileage'
                    selectItems={arr}
                    setItem={setMileage}
                />
                <SelectItem
                    title='Condition'
                    selectItems={arr}
                    setItem={setCondition}
                />
                <SelectItem title='City' selectItems={arr} setItem={setCity} />
                <SelectItem
                    title='Body Color'
                    selectItems={arr}
                    setItem={setBodyColor}
                />
                <SelectItem
                    title='Price'
                    selectItems={arr}
                    setItem={setPrice}
                />
            </div>
            <div className='car-decritpion'>
                <h2>Car description</h2>
                <textarea
                    onChange={(e) => setDesctiption(e.target.value)}
                    name='car-description'
                    id='description'
                    placeholder='Provide information about your car'
                />
            </div>
            <div className='phone-number'>
                <h2>Your Contacts</h2>
                <div className='phone-input'>
                    <h4>Phone</h4>
                    <input
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        type='tel'
                        name='phone-number'
                        id='phone-number'
                    ></input>
                </div>
            </div>
            <button className='red-btn place-ad-btn' onClick={placeAnAdHandle}>
                Place An Ad
            </button>
        </div>
    );
};

export default CarInfoDescritpion;
