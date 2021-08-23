import React, { useContext, useState } from 'react';
import Sketch from 'react-p5';
import '../../utils/p5.sound.min';
import { DjContext, audioConfig } from '../../store';
import bass from '../../audio/bass.wav';
import closedHiHat from '../../audio/closed-hihat.wav';
import snare from '../../audio/snare.wav';
import clap from '../../audio/clap.wav';

let kickSound;
let closedHiHatSound;
let snareSound;
let clapSound;
let kickPart;

export default function Play() {
  const [playButton, setPlayButton] = useState(false);

  const date = new Date();
  const time = date.getTime();

  const { audioStoreState } = useContext(DjContext);
  // const kickSoundRef = useRef();
  const {
    OpenHat, ClosedHat, Clap, Kick,
  } = audioStoreState;

  const preload = (p5) => {
    kickSound = p5.loadSound(bass);
    closedHiHatSound = p5.loadSound(closedHiHat);
    snareSound = p5.loadSound(snare);
    clapSound = p5.loadSound(clap);
    // kickSoundRef.current = kickSound;
  };

  const setup = (p5) => {
    p5.noCanvas();
  };

  const handlePlayButton = () => {
    setPlayButton(true);
    // new Phrase takes in the pattern of the array
    const kickPhrase = new p5.Phrase('kickSound', (time) => kickSound.play(time), Kick);
    // Part takes in the phrase and loops
    kickPart = new p5.Part();
    kickPart.addPhrase(kickPhrase);
    // Initialize sound to be played in a loop
    kickSound.play();
    kickPart.loop();
  };

  const handleStopButton = () => {
    setPlayButton(false);
    kickSound.stop();
    kickPart.stop();
  };

  return (
    <div>
      <button type="button" onClick={handlePlayButton}>Play</button>
      <button type="button" onClick={handleStopButton}>Stop</button>
      <Sketch preload={preload} setup={setup} />
    </div>
  );
}
