import React, { useContext } from 'react';
import Sketch from 'react-p5';
import '../../utils/p5.sound.min';
import { DjContext } from '../../store';

let fft;

export default function AudioVisualization() {
  const { audioStoreState } = useContext(DjContext);

  const setup = (p) => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    fft = new p5.FFT();
  };

  const draw = (p) => {
    // Gives us single stroke
    p.background(0);
    p.stroke(255);
    p.noFill();

    const wave = fft.waveform();

    p.beginShape();
    for (let i = 0; i < 180; i += 1) {
      const index = p.floor(p.map(i, 0, 180, 0, wave.length - 1));
      const r = p.map(wave[index], -1, 1, 150, 350);
      const x = r * p.sin(i);
      const y = r * p.cos(i);
      p.vertex(x, y);
    }
    p.endShape();
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}
