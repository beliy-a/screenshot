import React from 'react';
import TimeAgo from 'react-timeago'

// Components
import { Avatar } from '@material-ui/core';
// icons
import StopIcon from '@material-ui/icons/Stop';
// Styles
import './Screen.scss';

function Screen({ id, timestamp, username, imageUrl, read, profilePic }) {
  return (
    <div className="screen">
      <Avatar className="screen__avatar" />
      <div className="screen__info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view "}
          {<TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />}
        </p>
      </div>

      {!read && <StopIcon className="screen__stopIcon" />}
    </div>
  );
}

export default Screen;
