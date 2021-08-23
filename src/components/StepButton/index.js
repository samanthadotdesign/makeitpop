import React, { useContext, useState } from 'react';
import { DjContext } from '../../store';
import { Button } from './styles';

export default function StepButton({ trackName, sound, index }) {
  const { audioDispatch } = useContext(DjContext);
  const [soundOn, setSound] = useState(false);

  const handleClick = () => {
    // If the sound is on, onMouseDown the user wants to remove sound
    if (soundOn) {
      audioDispatch({
        type: 'remove step',
        payload: {
          trackName,
          index,
        },
      });
    } else {
      audioDispatch({
        type: 'add step',
        payload: {
          trackName,
          index,
        },
      });
    }
    setSound(!soundOn);
  };

  return (
    <>
      <Button
        onMouseDown={handleClick}
        soundOn={soundOn}
      >
        ►
      </Button>
    </>
  );
}
