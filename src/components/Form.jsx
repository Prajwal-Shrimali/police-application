import React, { useState } from 'react';
import InputFieldString from './InputFieldString';
import InputFieldNumber from './InputFieldNumber';

function Form() {
    const [inputData, setInputData] = useState({
        name: "",
        age: "",
        height: "",
        weight: "",
        stateOfResidence: ""
    });
    const [errorMessage, setErrorMessage] = useState([]);

    function callBackValue(value) {
		console.log(value);
		const { name, data, result, errorMessage } = value;
		if (result === null) {
			setInputData((prevValue) => ({
				...prevValue,
				[name]: data,
			}));
			setErrorMessage((prevValue) => {
				return (prevValue.filter((msg) => {
					console.log(msg, errorMessage);
					return (msg !== errorMessage);
				}))
			});
		} else {
			setErrorMessage((prevMessages) => [...prevMessages, result]);
		}
	}
	

    function handleSubmit(event) {
		event.preventDefault();
		console.log(inputData);
		console.log(errorMessage);
		if (errorMessage.length > 0) {
			alert(errorMessage);
		} else {
			alert("Passed the Selection");	
		}
		setErrorMessage([]);
	}
	
    return (
        <div className='container'>
            <h1>Police Selection Form</h1>
            <form onSubmit={handleSubmit}>
                <InputFieldString 
                    name="name" 
                    placeholder="Enter Name" 
                    callback={(value) => {
                        const { name, data } = value;
                        setInputData((prevValue) => ({
                            ...prevValue,
                            [name]: data
                        }));
                    }} 
                /><br />
                <InputFieldNumber 
                    name="age" 
                    lower={20} 
                    upper={30} 
                    errorMessage="You are out of age range" 
                    placeholder="Enter Age" 
                    callback={callBackValue}
                /><br />
				<InputFieldNumber 
                    name="height" 
                    lower={160} 
                    upper={999} 
                    errorMessage="You are out of height range" 
                    placeholder="Enter Height"  
                    callback={callBackValue}
                /><br />
				<InputFieldNumber 
                    name="weight" 
                    lower={45} 
                    upper={55} 
                    errorMessage="You are out of weight range" 
                    placeholder="Enter Weight"  
                    callback={callBackValue}
                /><br />
				<InputFieldString 
                    name="stateOfResidence" 
                    placeholder="Enter State of Residence"  
                    callback={(value) => {
                        const { name, data } = value;
                        setInputData((prevValue) => ({
                            ...prevValue,
                            [name]: data
                        }));
                    }} 
                /><br />
                <button>Click Here!!</button>
            </form>
        </div>
    );
}

export default Form;
