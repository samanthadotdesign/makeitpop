/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useContext, useState, useRef } from 'react';
import Sketch from 'react-p5';
import '../../utils/p5.sound.min';
import { DjContext, audioConfig } from '../../store';
import bass from '../../audio/bass.wav';
import snare from '../../audio/snare.wav';
import closedHihat from '../../audio/closed-hihat.wav';
import clap from '../../audio/clap.wav';

const sounds = [
  snare,
  closedHihat,
  clap,
  bass,
];

export default function Play() {
  const [playButton, setPlayButton] = useState(false);

  // stores the p5.Part
  const soundPartRef = useRef();

  // stores all the loaded sound files
  const soundFileRef = useRef([]);

  //  STORES ALL THE PHRASES
  const soundPhrasesRef = useRef([]);

  const { audioStoreState } = useContext(DjContext);
  const { phrases, tempo } = audioStoreState;

  // keys = [ Snare, HiHat, Clap, Kick]
  const phrasesKeys = Object.keys(phrases);

  const preload = (p5) => {
    // looping audio files and pre-loading them
    for (let i = 0; i < sounds.length; i += 1) {
      const loadedSound = p5.loadSound(sounds[i]);
      soundFileRef.current.push(loadedSound);
    }
  };
  const setup = (p5) => {
    p5.noCanvas();
  };

  const handlePlayButton = () => {
    // setPlayButton(true);
    console.log(soundFileRef.current);
    soundPartRef.current = new p5.Part();
    console.log(tempo);

    // new Phrase takes in the pattern of the array
    for (let i = 0; i < soundFileRef.current.length; i += 1) {
      const soundPhrase = new p5.Phrase(
        phrasesKeys[i],
        // Time is a parameter passed by p5
        (time) => {
          soundFileRef.current[i].play(time);
        },
        phrases[phrasesKeys[i]],
      );
      soundPhrasesRef.current.push(soundPhrase);
      console.log(soundPhrase);
    }

    for (let i = 0; i < soundPhrasesRef.current.length; i += 1) {
      soundPartRef.current.addPhrase(soundPhrasesRef.current[i]);
    }

    // for (let i = 0; i < soundFileRef.current.length; i += 1) {
    //   console.log(soundFileRef.current)
    //   console.log(tempo);
    //   soundFileRef.current[i].play(tempo);
    // }
    // soundPartRef.current.play(tempo);
    soundPartRef.current.setBPM(tempo);
    soundPartRef.current.loop();
  };

  const handleStopButton = () => {
    setPlayButton(false);
    soundPartRef.current.stop();
  };

  return (
    <div>
      <button type="button" onClick={handlePlayButton}>Play</button>
      <button type="button" onClick={handleStopButton}>Stop</button>
      <Sketch preload={preload} setup={setup} />
    </div>
  );
}
