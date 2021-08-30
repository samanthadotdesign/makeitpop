import React from 'react';
import TypeControl from '../TypeControl';
import AudioVisualization from '../AudioVisualization';
import ColorControl from '../ColorControl';
import { Container } from './styles';

export default function GraphicControl() {
  return (
    <Container>
      <TypeControl />
      <ColorControl />
      <AudioVisualization />
    </Container>
  );
}
