import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Other
import { selectCameraImage, resetCameraImage } from '../../features/cameraSlice';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

// Styles
import './Preview.scss';

function Preview() {
  const selectImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectImage) {
      history.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectImage]);

  const onClose = () => {
    dispatch(resetCameraImage());
  }

  const onSendPost = () => {
    console.log('object')
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
