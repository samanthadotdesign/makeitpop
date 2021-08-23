import BpmControl from '../BpmControl';
import { Container, Track } from './styles';
import StepButton from '../StepButton';

export default function AudioControl() {
  return (
    <>
      <BpmControl />
      <Container>
        <Track>
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
        </Track>
        <Track>
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
          <StepButton />
        </Track>
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
