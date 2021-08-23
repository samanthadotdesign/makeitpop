import React, { useContext, useRef } from 'react';
import Sketch from 'react-p5';
import { DjContext, audioConfig } from '../../store';
import '../../utils/p5.sound.min';
import bass from '../../audio/bass.wav';
import 

let kickSound;
export default function Play() {
  const { audioStoreState } = useContext(DjContext);
  const kickSoundRef = useRef();
  // let kickSound;
  const preload = (p5) => {
    kickSound = p5.loadSound(audio, () => console.log('inside loadSound'));
    console.log('inside preload');
    // kickSoundRef.current = kickSound;
  };

  const setup = (p5) => {
    p5.noCanvas();
  };

  const handleClick = () => {
    kickSound.play();
    // kickSoundRef.current.play();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Play</button>
      <Sketch preload={preload} setup={setup} />
    </div>
  );
}
