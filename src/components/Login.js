import React from 'react'
import { isLogin } from '../Store/AuthSlice'
import { useDispatch } from 'react-redux'
function Login() {
    const dispatch = useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(isLogin())
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type='email'/>
            <label>Password</label>
            <input type='password'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login