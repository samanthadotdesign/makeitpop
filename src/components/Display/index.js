import React, { useContext } from 'react';
import Sketch from 'react-p5';
import { DjContext } from '../../store';

export default function GraphicControl() {
  const { textDispatch, textStoreState } = useContext(DjContext);
  const { input } = textStoreState;
  let canvas;

  // Rendering the setup canvas once
  const setup = (p5) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  // Rerendering the sketch
  const draw = (p5) => {
    p5.clear();
    p5.text(input, 100, p5.windowHeight / 2);
  };

  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
      />
    </>
  );
}
