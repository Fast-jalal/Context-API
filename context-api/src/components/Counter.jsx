import React from 'react'
import { useContext } from 'react'
import { ConterContext } from '../context/Counter'

const Counter = () => {

    const state = useContext(ConterContext);


    return (
        <div>
            <button onClick={() => {
                state.setCount(state.count += 1)
            }}>Increment</button>
            <button onClick={() => {
                if (state.count != 0) {
                    state.setCount(state.count -= 1)

                }
            }}>Decrement</button>
        </div>
    );
};

export default Counter