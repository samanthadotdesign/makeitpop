import React, { useContext } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { DjContext } from '../../store';

export default function GraphicControl() {
  const { textDispatch, textStoreState } = useContext(DjContext);
  const { input } = textStoreState;

  // Rerendering the sketch
  const sketch = (p5, textInput) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };

    p5.draw = () => {
      p5.clear();
      p5.text(textInput, 100, p5.windowHeight / 2);
    };
  };

  return (
    <>
      <P5Wrapper sketch={(p5) => { sketch(p5, input); }} />
    </>
  );
}
