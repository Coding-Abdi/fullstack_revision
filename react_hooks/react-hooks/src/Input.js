import React, { useState } from 'react';

function Input () {
    const [inputValue, setInputValue] = useState("Tom");

    const handleChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue);
    };
    
    return(
        <div>
            <input placeholder="input text..." onChange={handleChange} />
            {inputValue}
        </div>
    );
};

export default Input;