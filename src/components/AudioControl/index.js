import React, { useContext, useState } from 'react';
import { DjContext, audioConfig } from '../../store';
import { Container, Track } from './styles';
import BpmControl from '../BpmControl';
import StepButton from '../StepButton';
import Play from '../Play';

export default function AudioControl() {
  const { audioStoreState } = useContext(DjContext);
  const { phrases, tempo } = audioStoreState;

  return (
    <>
      <BpmControl />
      <Play />
      <Container>
        { audioConfig.map((audio) => (
          <Track>
            <p>{audio.name}</p>
            { phrases[audio.key].map((button, index) => (
              <StepButton
                trackName={audio.key}
                index={index}
              />
            ))}
          </Track>
        )) }
      </Container>
    </>
  );
}
