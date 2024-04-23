import React, { useState } from 'react';

function StateTutorial () {
    const [counter, setCounter] = useState(0);

    const increment = () => {
       setCounter(counter + 1);
    }

    const decrement = () => {
       setCounter(counter - 1);
    }
    

    return (
        <div> 
            <button onClick={increment}>Increment</button>
            {counter}
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default StateTutorial;