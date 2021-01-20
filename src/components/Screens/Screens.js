import React, { useState, useEffect } from 'react';

// Other
import { db } from '../../database/firebase';

// Components
import Screen from '../Screen';
import { Avatar } from '@material-ui/core';
// Styles
import './Screens.scss';

function Screens() {
  const [screens, setScreens] = useState([])

  useEffect(() => {
    db
      .collection('screens')
      .orderBy('timestamp', 'desc')
      .onSnapshot(function (snapshot) {
        const screensFromDb = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))

        setScreens(screensFromDb);
      });
  }, [])

  return (
    <div className="screens">
      <div className="screens__header">
        <Avatar className="screens__avatar" />
      </div>

      <div className="screens__body">
        {screens.map(({ id, data }) => (
          <Screen
            key={id}
            id={id}
            username={data.username}
            timestamp={data.timestamp}
            imageUrl={data.imageUrl}
            read={data.read}
            profilePic={data.profilePic}
          />
        ))}
      </div>
    </div>
  );
}

export default Screens;
