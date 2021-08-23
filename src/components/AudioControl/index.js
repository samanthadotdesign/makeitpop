import BpmControl from '../BpmControl';
import { Container, Row } from './styles';
import SingleTrack from '../SingleTrack';

export default function AudioControl() {
  return (
    <>
      <BpmControl />
      <Container>
        <Row>
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
        </Row>
        <Row>
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
          <SingleTrack />
        </Row>
      </Container>
    </>
  );
}

/**
 * <AudioControl>
 *    <BPM>
 *    <Play Btn>
 *    <DrumGrid>
 *        <Single Track> // map out buttons for each row
    *        <OpenHat Track>
    *            <StepButton>
    *        <ClosedHat Track>
    *        <Clap Track>
    *        <Kick Track>
    */
