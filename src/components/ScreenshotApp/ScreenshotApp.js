import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import WebcamComponent from '../WebcamComponent';
// Styles
import './ScreenshotApp.scss';

function ScreenshotApp() {
  return (
    <div className="screenshotApp">
      <Router>
        <Switch>
          <Route exact path="/">
            <WebcamComponent />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default ScreenshotApp;
