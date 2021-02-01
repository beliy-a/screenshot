import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Other
import { db, auth } from '../../database/firebase';
import { selectUser, logout } from '../../features/userSlice';
// Components
import Screen from '../Screen';
import { Avatar } from '@material-ui/core';
// Icons 
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
// Styles
import './Screens.scss';

function Screens() {
  const [screens, setScreens] = useState([])
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  let fetchData = () => {
    db
      .collection('screens')
      .orderBy('timestamp', 'desc')
      .onSnapshot(function (snapshot) {
        const screensFromDb = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }));

        setScreens(screensFromDb);
      });
  }

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Sign-out successful');
        dispatch(logout());
      })
      .catch((error) => console.log(error.message));
  };

  const onWebcam = () => {
    history.push('/');
  };

  useEffect(() => {
    fetchData();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fetchData = null;
    }
  }, [])

  return (
    <div className="screens">
      <div className="screens__header">
        <Avatar
          className="screens__avatar"
          src={user.profilePic}
          onClick={onSignOut}
        />
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
      <div className="screens__footer">
        <RadioButtonUncheckedOutlinedIcon
          className="screens__icon"
          onClick={onWebcam}
        />
      </div>
    </div>
  );
}

export default Screens;
