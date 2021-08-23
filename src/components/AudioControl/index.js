import React, { useContext } from 'react';
import { DjContext, audioConfig } from '../../store';
import BpmControl from '../BpmControl';
import { Container, Track } from './styles';
import StepButton from '../StepButton';

export default function AudioControl() {
  const { audioStoreState, audioDispatch } = useContext(DjContext);
  console.log(audioStoreState);

  return (
    <>
      <BpmControl />
      <Container>
        { audioConfig.map((audio) => (
          <Track>
            <p>{audio.name}</p>
            { audioStoreState[audio.key].map((button) => (
              <StepButton sound={audio.sound} />
            ))}
          </Track>
        )) }
      </Container>
    </>
  );
}

/**
 * <AudioControl>
 *    <BPM> – control speed
 *    <Play Btn>
 *    <DrumGrid>
 *        <Track> // map out buttons for each row
    *        <OpenHat Track>
    *            <StepButton><StepButton><StepButton><StepButton>
    *        <ClosedHat Track>
    *        <Clap Track>
    *        <Kick Track>
    */
