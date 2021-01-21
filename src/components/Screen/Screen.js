import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TimeAgo from 'react-timeago'

// other
import { db } from '../../database/firebase';
import { setImage } from '../../features/imageSlice';

// Components
import { Avatar } from '@material-ui/core';
// icons
import StopIcon from '@material-ui/icons/Stop';
// Styles
import './Screen.scss';

function Screen({ id, timestamp, username, imageUrl, read, profilePic }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const openScreen = () => {
    if (!read) {
      dispatch(setImage(imageUrl));
      db
        .collection('screens')
        .doc(id)
        .set({
          read: true
        }, { merge: true });

      history.push('/screen/view');
    }
  }

  return (
    <div onClick={openScreen} className="screen">
      <Avatar className="screen__avatar" src={profilePic} />
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
