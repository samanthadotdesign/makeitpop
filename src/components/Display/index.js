import React, { useContext } from 'react';
import Sketch from 'react-p5';
import { DjContext } from '../../store';

export default function GraphicControl() {
  const { textDispatch, textStoreState, colorStoreState } = useContext(DjContext);
  const { input } = textStoreState;
  const { selection } = colorStoreState;
  // selection is an array of object rgba colors

  // Rendering the setup canvas once
  const setup = (p5) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  // Rerendering the sketch
  const loadedColors = [];
  const draw = (p5) => {
    p5.clear();
    p5.text(input, 100, p5.windowHeight / 2);

    // For every color's rgba, refresh the color frameCount / speed
    // speed should be a multiplier, changing with the amp
    const speed = 10;
    for (let i = 0; i < selection.length; i += 1) {
      const r = selection.r * p5.noise(p5.frameCount / speed);
      const g = selection.g * p5.noise(1000 + p5.frameCount / speed);
      const b = selection.b * p5.noise(2000 + p5.frameCount / speed);
      const color = p5.color(r, g, b);
      loadedColors.push(color);
    }
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
