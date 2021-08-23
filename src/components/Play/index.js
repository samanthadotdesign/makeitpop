import React, { useContext, useState } from 'react';
import Sketch from 'react-p5';
import '../../utils/p5.sound.min';
import { DjContext, audioConfig } from '../../store';

const sounds = [
  '../../audio/snare.wav',
  '../../audio/closed-hihat.wav',
  '../../audio/clap.wav',
  '../../audio/bass.wav',
];

const loadedSounds = [];
const soundPhrases = [];
let soundPart;

export default function Play() {
  const [playButton, setPlayButton] = useState(false);

  const date = new Date();
  const time = date.getTime();

  const { audioStoreState } = useContext(DjContext);
  // const kickSoundRef = useRef();
  // audioStoreState keys = [ Snare, HiHat, Clap, Kick]
  const audioStoreKeys = Object.keys(audioStoreState);

  const preload = (p5) => {
    for (let i = 0; i < sounds.length; i += 1) {
      const loadedSound = p5.loadSound(sounds[i]);
      loadedSounds.push(loadedSound);
    }
  };
  const setup = (p5) => {
    p5.noCanvas();
  };

  const handlePlayButton = () => {
    setPlayButton(true);
    soundPart = new p5.Part();

    // new Phrase takes in the pattern of the array
    for (let i = 0; i < loadedSounds.length; i += 1) {
      const soundPhrase = new p5.Phrase(
        audioStoreKeys[i],
        () => loadedSounds[i].play(),
        audioStoreState[audioStoreKeys[i]],
      );
      soundPhrases.push(soundPhrase);
      loadedSounds[i].play();
      console.log(soundPhrase);
    }

    for (let i = 0; i < soundPhrases.length; i += 1) {
      soundPart.addPhrase(soundPhrases[i]);
    }

    console.log(soundPart);
    soundPart.loop();

    // const kickPhrase = new p5.Phrase('kickSound', (time) => kickSound.play(time), Kick);
    // // Part takes in the phrase and loops
    // kickPart = new p5.Part();
    // kickPart.addPhrase(kickPhrase);
    // // Initialize sound to be played in a loop
    // kickSound.play();
    // kickPart.loop();
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
