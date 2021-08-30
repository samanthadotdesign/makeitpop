import React from 'react';
import TypeControl from '../TypeControl';
import ColorControl from '../ColorControl';
import { Container } from './styles';

export default function GraphicControl() {
  return (
    <Container>
      <TypeControl />
      <ColorControl />
      {/* <AudioVisualization /> */}
    </Container>
  );
}
