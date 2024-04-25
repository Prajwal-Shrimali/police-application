import React, { useState } from 'react';

function InputFieldNumber(props) {
    const [data, setData] = useState('');

    function handleInputChange(event) {
        const { value } = event.target;
        setData(value);
        const result = (props.lower <= value && value <= props.upper) ? null : props.errorMessage;
        props.callback({ name: props.name, data: value, result: result, errorMessage: props.errorMessage });
    };

    return (
        <input 
            type='number' 
            value={data}
            name={props.name} 
            placeholder={props.placeholder} 
            onChange={handleInputChange} 
        />
    );
}

export default InputFieldNumber;
