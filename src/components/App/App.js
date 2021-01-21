import React from 'react';
import { useSelector } from 'react-redux';
// Components
import Login from '../Login';
import ScreenshotApp from '../ScreenshotApp';
// Other
import { selectUser } from '../../features/userSlice';
// Styles
import './App.scss';

function App() {
  const user = useSelector(selectUser);

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
