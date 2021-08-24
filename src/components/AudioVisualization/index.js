import React, { useContext } from 'react';
import Sketch from 'react-p5';
import '../../utils/p5.sound.min';
import { DjContext } from '../../store';

let fft;
let singleParticle;

// Create particle class constructor
const particleSetup = (p) => {
  p.setup = () => {
    class Particle {
      constructor() {
        this.pos = new p5.Vector(150, 150);
        // this.posX = 0;
        // this.posY = 150;
        this.vel = p.createVector(0, 0);
        this.acc = this.pos.copy();
        this.w = p.random(3, 5);
        this.color = p.color(255, 204, 0);
      }

      update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
      }

      show() {
        p.noStroke();
        p.fill(255);
        p.ellipse(255, 350);
      }
    }
    // Create instance of the particle
    singleParticle = new Particle();
    console.log('******* INSIDE PARTICLE SETUP *********');
    console.log(singleParticle);
  };

  // p.draw = () => {
  //   singleParticle.update();
  //   singleParticle.show();
  // };
};

// Showing the particle inside a new p5 instance
const particleInstance = new p5(particleSetup);
console.log('*********************');
console.log(particleInstance);

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
    // particleInstance.update()
    singleParticle.show();
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
