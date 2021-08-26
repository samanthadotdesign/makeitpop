import React from 'react';
import TypeControl from '../TypeControl';
import AudioVisualization from '../AudioVisualization';
import ColorControl from '../ColorControl';

export default function GraphicControl() {
  return (
    <>
      <TypeControl />
      <ColorControl />
      <AudioVisualization />
    </>
  );
}
