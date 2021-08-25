/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
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
  const { audioStoreState } = useContext(DjContext);
  const { phrases, tempo } = audioStoreState;

  const [playButton, setPlayButton] = useState(true);
  const [buttonText, setButtonText] = useState('Play');

  // keys = [ Snare, HiHat, Clap, Kick]
  const phrasesKeys = Object.keys(phrases);

  // stores the p5.Part
  const soundPartRef = useRef();
  // stores all the loaded sound files
  const soundFileRef = useRef([]);
  //  STORES ALL THE PHRASES
  const soundPhrasesRef = useRef([]);
<<<<<<< HEAD
  const buttonRef = useRef();
  const { audioStoreState } = useContext(DjContext);
  console.log('### AUDIOSTORESTATE ###', audioStoreState);

  // audioStoreState keys = [ Snare, HiHat, Clap, Kick]
  const audioStoreKeys = Object.keys(audioStoreState);
  console.log('## AUDIOSTORE-KEYS ##', audioStoreKeys);
=======
>>>>>>> main

  const preload = (p5) => {
    // looping audio files and pre-loading them
    for (let i = 0; i < sounds.length; i += 1) {
      const loadedSound = p5.loadSound(sounds[i]);
      soundFileRef.current.push(loadedSound);
<<<<<<< HEAD
      console.log(soundFileRef.current);
=======
>>>>>>> main
    }
  };
  const setup = (p5) => {
    p5.noCanvas();
  };

<<<<<<< HEAD
  const handlePlayButton = () => {
    console.log('HANDLEPLAYFUNCTION function');
    console.log(soundFileRef.current);
=======
  const playMusic = () => {
>>>>>>> main
    soundPartRef.current = new p5.Part();

    // new Phrase takes in the pattern of the array
    // sequence is combination of steps array [0,0,1..], loadedSounds, and tempo
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
    soundPartRef.current.setBPM(120);
    soundPartRef.current.loop();
  };

  useEffect(() => {
    if (soundPartRef.current) {
      soundPartRef.current.setBPM(tempo);
    }
  }, [tempo]);

  const handleButton = () => {
    // If playButton is currently true, user wants to stop
    if (playButton) {
      setButtonText('Play');
      setPlayButton(false);

      if (soundPartRef.current) {
        soundPartRef.current.stop();
      }
    } else {
      // if playButton is currently false, user wants to play
      setButtonText('Stop');
      setPlayButton(true);
      playMusic();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleButton}>{buttonText}</button>
      <p>{tempo}</p>
      <Sketch preload={preload} setup={setup} />
    </div>
  );
}
