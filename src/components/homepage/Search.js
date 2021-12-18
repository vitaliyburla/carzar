import React from 'react';
import SelectItem from '../SelectItem';

const Search = () => {
    let arr = [0, 1, 2, 3, 4];
    return (
        <div className='search-container'>
            <h2>USE QUICK SEARCH TO FIND YOUR CAR</h2>
            <form className='search-form'>
                <div className='search-input'>
                    <input type='text' name='' id='' placeholder='Your query' />
                    <button className='go-btn red-btn'>Go</button>
                </div>
                <div className='select-container'>
                    <h2>OR USE FILTERS</h2>

                    <div className='select-items'>
                        <SelectItem title='Make' selectItems={arr} />
                        <SelectItem title='Model' selectItems={arr} />
                        <SelectItem title='Transmission' selectItems={arr} />
                        <SelectItem title='Body Color' selectItems={arr} />
                        <SelectItem title='Year Min' selectItems={arr} />
                        <SelectItem title='Year Max' selectItems={arr} />
                        <SelectItem title='Mileage Min' selectItems={arr} />
                        <SelectItem title='Mileage Max' selectItems={arr} />
                        <SelectItem title='Price Min' selectItems={arr} />
                        <SelectItem title='Price Max' selectItems={arr} />
                        <SelectItem title='Condition' selectItems={arr} />
                        <SelectItem title='Bodystyle' selectItems={arr} />
                    </div>
                </div>
                <button className='find-btn red-btn'>Find</button>
            </form>
        </div>
    );
};
export default Search;
