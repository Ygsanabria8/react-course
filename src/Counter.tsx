import { useState } from "react";

type Counter = {
    counter:number,
}

const Counter = (props:Counter) => {

    //useState - Hook
    const [counter, setCounter] = useState(props.counter);

    // Add Counter
    const AddCounter = () => {
      setCounter(counter + 1);
    };

    // Reduce Counter
    const ReduceCounter = () => {
        setCounter(counter - 1);
    };

    // Reset Counter
    const ResetCounter = () => {
        setCounter(props.counter);
    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick = { AddCounter }>+</button>
            <button onClick = { ResetCounter }>reset</button>
            <button onClick = { ReduceCounter }>-</button>
        </>
    );
};

export default Counter;