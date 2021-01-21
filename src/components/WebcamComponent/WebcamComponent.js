import React from 'react';
import Webcam from "react-webcam";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Other
import { setCameraImage } from '../../features/cameraSlice';
// Icons
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';

// Styles
import './WebcamComponent.scss';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
};

function WebcamComponent() {
  const webcamRef = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setCameraImage(imageSrc));
      history.push('/preview');
    },
    [dispatch, history]
  );

  return (
    <div className="webcamComponent">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedOutlinedIcon
        onClick={capture}
        className="webcamComponent__icon"
      />
    </div>
  )
}

export default WebcamComponent;
