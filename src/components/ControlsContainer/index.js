import React from 'react';
import TypeControl from '../TypeControl';
import ColorControl from '../ColorControl';
import AudioControl from '../AudioControl';
import Play from '../Play';
import { Container, Panel } from './styles';

export default function ControlsContainer() {
  return (
    <Panel>
      {/* Graphic Controls */}
      <Play />
      <Container>
        <TypeControl />
        <ColorControl />
      </Container>
      {/* Audio Controls */}
      <AudioControl />
    </Panel>
  );
}
