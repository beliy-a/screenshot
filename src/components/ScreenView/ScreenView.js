
import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// Other
import { selectScreenImage } from '../../features/imageSlice';
// Styles
import './ScreenView.scss';

function ScreenView() {
  const selectImage = useSelector(selectScreenImage);
  const history = useHistory();
  const counter = useRef(null);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const exit = useCallback(() => {
    history.replace('/screens');
  })

  useEffect(() => {
    if (!selectImage) {
      exit()
    }
  }, [exit, selectImage])

  return (
    <div className="screenView">
      <img
        src={selectImage}
        alt=""
        onClick={exit}
      />

      <div className="screenView__timer">
        <CountdownCircleTimer
          isPlaying
          size={50}
          strokeWidth={6}
          duration={10}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (counter.current === 0) {
              exit();
            }
            counter.current = remainingTime;
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default ScreenView;
