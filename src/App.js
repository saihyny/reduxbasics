
import './App.css';
import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { decrement,increment } from './Store/counterSlice';

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment-5
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement-5
          </button>
        </div>
      </div>
    )
  }


export default App;
