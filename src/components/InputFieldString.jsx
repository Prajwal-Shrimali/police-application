import React, { useState } from 'react';

function InputFieldNumber(props) {
    const [data, setData] = useState('');

    function handleInputChange(event) {
        const { value } = event.target;
        setData(value);
        props.callback({ name: props.name, data: value });
    };

    return (
        <input 
            type='text' 
            value={data}
            name={props.name} 
            placeholder={props.placeholder} 
            onChange={handleInputChange} 
        />
    );
}

export default InputFieldNumber;
