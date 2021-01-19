import React from 'react';
import Webcam from "react-webcam";

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

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
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
