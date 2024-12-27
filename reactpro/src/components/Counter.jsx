import {useState} from 'react';
export default function Counter() {
    // useState is a hook that allows you to have state 
    // variables in functional components
    // The only argument to useState is the initial state
    // The return value is an array with 2 elements
    // The first element is the current state value
    // The second element is a function that allows you to update the state
    // The state is often declared at the top of the component 
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    function increment() {
        setCount(count + incrementBy);
    }
    function decrement() {
        setCount(count - incrementBy);
    }
    function increaseIncrement() {
        setIncrementBy(incrementBy + 1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy - 1);
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h1>Increment by: {incrementBy}</h1>
            <button onClick={increaseIncrement}>Increase increment by 1</button>
            <button onClick={decreaseIncrement}>Decrease increment by 1</button>
        </div>
    )
}