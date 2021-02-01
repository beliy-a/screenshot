import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Button } from '@material-ui/core';

// Other
import { auth, provider } from '../../database/firebase';
import { login } from '../../features/userSlice';

// Styles
import './Login.scss';
// Images
import ScreenLogo from '../../assets/Screenshot_logo.png';


function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = () => {
    auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        const currentUser = {
          username: user.displayName,
          profilePic: user.photoURL,
          id: user.id
        };

        dispatch(login(currentUser));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

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
          onClick={onLogin}
        >Sign In</Button>
      </div>

    </div>
  )
}

export default Login;
