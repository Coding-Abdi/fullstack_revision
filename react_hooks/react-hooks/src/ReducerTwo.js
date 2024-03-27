import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
}

function ReducerTwo () {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: false })

   const handleClick = () => {
    dispatch({ type: "INCREMENT" });
}

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleClick}> Click Here </button>
            {state.showText && <p>Visible text</p>}
        </div>
    );
};

export default ReducerTwo;

// The handleClick function on line 17, should only increase the counter as we are only dispatching the "INCREMENT" action on line 5. We are not dispatching the 'toggleShowText' action on line 7, but that is incorrectly activating as well.

// case "toggleShowText": 
// return { count: state.count, showText: !state.showText }