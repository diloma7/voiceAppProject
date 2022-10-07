import { TextField } from '@mui/material'
import React from 'react'
import './loginStyle.scss'
import google from './images/google.png'

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginDetail">

        <p>Image Logo Here</p>
        <h1>Welcome to Silvertung</h1>

        <form >
          <p>LogIn to your account here</p>
          <label htmlFor="">Email</label>
          <TextField
            id="filled-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
            placeholder='Email..'
            style={{
              // backgroundColor: "blue",
              width: '80%',
              borderColor: 'none',
              paddingLeft: '35px'

            }} />
          <label htmlFor="">Password</label>
          <TextField
            id="filled-size-small"
            // defaultValue="Small"
            placeholder='Password..'
            variant="outlined"
            size="small"
            style={{
              // backgroundColor: "blue",
              width: '80%',
              borderColor: 'none',
              paddingLeft: '35px'

            }}
          />

          <div className="rememberMe">
            <div className="item1">Remember me</div>
            <div className="item2">Forgot password?</div>
          </div>

          <button type="submit" className='logButton'>LogIn Now</button>
          <button type="submit" className='googleButton'><img src={google} alt="" /> Sign-In with Google</button>
        </form>
      </div>
    </div>
  )
}

export default Login