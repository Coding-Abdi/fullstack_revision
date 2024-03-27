import React, { useState } from 'react';

function ReducerTutorial () {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

   const handleClick = () => {
    setCount(count + 1);
    setShowText(!showText);
   }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}> Click Here </button>
            {showText && <p>Visible text</p>}
        </div>
    );
};

export default ReducerTutorial;
