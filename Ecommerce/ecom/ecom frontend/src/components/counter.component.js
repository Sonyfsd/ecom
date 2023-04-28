import React, { useReducer } from 'react';

function counterReducer(state, action) {
    if (action.type === 'INCREMENT') {
        return {counter: state.counter + 1};
    } else if (action.type === 'DECREMENT') {
        return {counter: state.counter - 1};
    } else {
        return {counter: 0};
    }
}

function CounterComponent() {
    const [state, dispatch] = useReducer(counterReducer, {counter: 0})
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm">
                    <h3>Counter: {state.counter}</h3>
                    <button className='btn btn-primary me-2' onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
                    <button className='btn btn-warning me-2' onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
                    <button className='btn btn-danger' onClick={() => dispatch({type: 'RESET'})}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterComponent;