import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Login from '../Login';
import ScreenshotApp from '../ScreenshotApp';
// Other
import { selectUser, login, logout } from '../../features/userSlice';
import { auth } from '../../database/firebase';
// Styles
import './App.scss';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth().onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])


  return (
    <div className="app">
      {!user
        ?
        (<Login />)
        :
        (
          <div className="app__body">
            <ScreenshotApp />
          </div>
        )
      }

    </div>
  );
}

export default App;
