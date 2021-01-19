import React from 'react';

// Components
import Login from '../Login';
import ScreenshotApp from '../ScreenshotApp';
// Styles
import './App.scss';

function App() {


  return (
    <div className="app">
      {!true
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
