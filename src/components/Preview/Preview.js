import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
// Other
import { selectCameraImage, resetCameraImage } from '../../features/cameraSlice';
import { selectUser } from '../../features/userSlice';
import { storage, db } from '../../database/firebase';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
// Styles
import './Preview.scss';

function Preview() {
  const selectImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!selectImage) {
      history.replace('/');
    }
  }, [history, selectImage]);

  const onClose = () => {
    dispatch(resetCameraImage());
  }

  const onSendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`screens/${id}`)
      .putString(selectImage, 'data_url');

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('screens')
          .child(id)
          .getDownloadURL()
          .then((downloadURL) => {
            db
              .collection('screens')
              .add({
                imageUrl: downloadURL,
                username: user.username,
                read: false,
                profilePic: user.profilePic,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              });
            history.replace('/screens');
          })
      });
  }

  return (
    <div className="preview">
      <CloseIcon
        className="preview__closeIcon"
        onClick={onClose} />
      <img src={selectImage} alt="" />

      <div onClick={onSendPost} className="preview__footer">
        <h2>Send now</h2>
        <SendIcon fontSize="small" className="preview__send" />
      </div>
    </div>
  )
}

export default Preview;
