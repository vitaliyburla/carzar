import React from 'react';

const SelectItem = (props) => {
    const { title, selectItems, setItem } = props;

    return (
        <div className='select-item'>
            <h4>{title}</h4>
            <select
                className='search-select'
                onChange={(e) => {
                    setItem(
                        selectItems.find(
                            (x) => x.id === parseInt(e.target.value)
                        )
                    );
                }}
            >
                <option>Choose {title}</option>
                {createSelectItems(selectItems)}
            </select>
        </div>
    );
};

const createSelectItems = (arr) => {
    let items = [];
    for (let i = 0; i < arr.length; i++) {
        items.push(
            <option key={arr[i].id} value={arr[i].id}>
                {arr[i].name}
            </option>
        );
    }
    return items;
};
export default SelectItem;
