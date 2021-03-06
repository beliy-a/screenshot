import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Components
import WebcamComponent from '../WebcamComponent';
import Preview from '../Preview';
import Screens from '../Screens';
import ScreenView from '../ScreenView';
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

          <Route path="/preview">
            <Preview />
          </Route>

          <Route path="/screens">
            <Screens />
          </Route>

          <Route path="/screen/view">
            <ScreenView />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default ScreenshotApp;
