import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Store/counterSlice";
import Login from "./components/Login";
import { isLogout } from "./Store/AuthSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const auth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <li>Redux Auth</li>
        <li> My Products</li>
        <li>My Sales</li>
        {auth && <button onClick={() => dispatch(isLogout())}>Logout</button>}
      </nav>
      {!auth && <Login />}
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
  );
}

export default App;
