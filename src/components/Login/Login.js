import React from 'react';

// Components
import { Button } from '@material-ui/core';

// Styles
import './Login.scss';
// Images
import ScreenLogo from '../../assets/Screenshot_logo.png';


function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__imageLogo"
          src={ScreenLogo}
          alt="Logo" />
        <Button
          size="large"
          variant="contained"
        >Sign In</Button>
      </div>

    </div>
  )
}

export default Login;
