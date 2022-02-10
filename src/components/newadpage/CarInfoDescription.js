import React, { useState, useEffect } from 'react';
import SelectItem from '../SelectItem';
import PhotoChooser from '../PhotoChooser';
import {
    fetchCarTypes,
    fetchCarModels,
    fetchBodyTypes,
    createNewAd,
    fetchCarByBodyTypeAndModel,
} from '../../api';

import { useHistory } from 'react-router-dom';

const CarInfoDescritpion = (props) => {
    const history = useHistory();
    let arr = [1, 2, 3, 4, 5];
    const { photo } = props;

    const [carTypes, setCarTypes] = useState(null);
    const [selectedCarType, setSelectedCarType] = useState(null);

    const [carModels, setCarModels] = useState(null);
    const [selectedCarModel, setSelectedCarModel] = useState(null);

    const [bodyTypes, setBodyTypes] = useState(null);
    const [selectedBodyType, setSelectedBodyType] = useState(null);

    const [description, setDesctiption] = useState(null);
    const [mileage, setMileage] = useState(null);
    const [color, setColor] = useState(null);
    const [price, setPrice] = useState(null);

    const placeAnAdHandle = () => {
        fetchCarByBodyTypeAndModel({
            carModel: {
                id: selectedCarModel.id,
            },
            bodyType: {
                id: selectedBodyType.id,
            },
        }).then(({ data }) => {
            const sendInformation = {
                description: description,
                price: parseInt(price),
                user: {
                    id: parseInt(localStorage.getItem('userId')),
                },
                color: color,
                mileage: parseInt(mileage),
                car: {
                    id: data.id,
                },
            };
            createNewAd(sendInformation).then(() =>
                history.push('/my-profile')
            );
        });
    };

    useEffect(() => {
        fetchCarTypes().then(({ data }) => {
            setCarTypes(data);
        });
    }, []);

    useEffect(() => {
        if (selectedCarType !== null) {
            fetchCarModels(selectedCarType).then(({ data }) => {
                setCarModels(data);
            });
            fetchBodyTypes(selectedCarType).then(({ data }) => {
                setBodyTypes(data);
            });
        }
    }, [selectedCarType]);

    return (
        <div className='info-container'>
            {carTypes && (
                <div className='basic-info'>
                    <h2>Basic Information</h2>
                    <SelectItem
                        title='Car Type'
                        selectItems={carTypes}
                        setItem={setSelectedCarType}
                    />
                    {selectedCarType && carModels && bodyTypes && (
                        <>
                            <SelectItem
                                title='Model'
                                selectItems={carModels}
                                setItem={setSelectedCarModel}
                            />
                            <SelectItem
                                title='Body Type'
                                selectItems={bodyTypes}
                                setItem={setSelectedBodyType}
                            />
                        </>
                    )}
                </div>
            )}
            <div className='info-input'>
                <h4>Price</h4>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    type='text'
                    name='price'
                    id='price'
                ></input>
            </div>
            <div className='info-input'>
                <h4>Color</h4>
                <input
                    onChange={(e) => setColor(e.target.value)}
                    type='text'
                    name='color'
                    id='color'
                ></input>
            </div>
            <div className='info-input'>
                <h4>Mileage</h4>
                <input
                    onChange={(e) => setMileage(e.target.value)}
                    type='text'
                    name='mileage'
                    id='mileage'
                ></input>
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
            <button className='red-btn place-ad-btn' onClick={placeAnAdHandle}>
                Place An Ad
            </button>
        </div>
    );
};

export default CarInfoDescritpion;
