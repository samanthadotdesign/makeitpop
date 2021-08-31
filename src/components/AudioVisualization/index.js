/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable for-direction */
import React, { useContext } from 'react';
import Sketch from 'react-p5';
// import '../../utils/p5.sound.min';
import { DjContext } from '../../store';
import { FullContainer } from './styles';

let fft;
let singleParticle;
let amp;
let img;
const particles = [];

// Showing the particle inside a new p5 instance
// const particleInstance = new p5(particleSetup);

export default function AudioVisualization() {
  const { colorStoreState, textStoreState } = useContext(DjContext);
  const { input } = textStoreState;
  const { selection } = colorStoreState;
  const backgroundColor = selection[0];
  const strokeColor = selection[1];
  const particleColor = selection[2];
  const textColor = selection[3];

  const setup = (p) => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.class('text');
    // CHANGE THE ANGLE MODE TO DEGREES
    p.angleMode(p.DEGREES);
    p.imageMode(p.CENTER);
    // CREATE NEW FFT OBJECT
    fft = new p5.FFT();
    // img.p.filter(p.BLUR, 60);
  };
  const angle = 0;
  const draw = (p) => {
    p.clear();

    p.background(backgroundColor);

    p.push();

    if (amp > 190) {
      p.rotate(p.random(-0.5, 1));
    }


    p.text(input, p.windowHeight / 2, p.windowHeight / 2);
    p.color(textColor);
    p.pop();

    // p.push();
    // p.text(input, 100, p.windowHeight / 2);
    // p.rotate(p.radians(p.frameCount));
    // p.color(textColor);
    // p.pop();

    p.stroke(strokeColor);
    p.strokeWeight(3);
    p.noFill();

    //  PLACE THE CIRCLE IN THE MIDDLE OF THE SCREEN (waveform)
    p.translate(p.windowWidth / 2, p.windowHeight / 2);

    p.push();
    if (amp > 210) {
      p.rotate(p.random(-0.5, 0.5));
    }

    p.pop();

    // p.image(img, 0, 0, p.windowWidth, p.windowHeight);

    fft.analyze();
    amp = fft.getEnergy(20, 200);

    const wave = fft.waveform();

    //   DISPLAYS WAVEFORM IN A CIRCLE
    p.beginShape();
    for (let i = 0; i < 180; i += 0.5) {
      const index = p.floor(p.map(i, 0, 180, 0, wave.length - 1));
      const radius = p.map(wave[index], -1, 1, 150, 350);

      //   create x and y coordinate
      const x = radius * -p.sin(i);
      const y = radius * p.cos(i);

      //  Y VALUE CAN CHANGE
      p.vertex(x, y);
      p.endShape();
    }

    p.beginShape();
    for (let i = 0; i < 180; i += 0.5) {
      //  map to
      const index = p.floor(p.map(i, 0, 180, 0, wave.length - 1));
      const radius = p.map(wave[index], -1, 1, 150, 350);

      //   create x and y coordinate
      const x = radius * p.sin(i);
      const y = radius * p.cos(i);

      //  Y VALUE CAN CHANGE
      p.vertex(x, y);
      p.endShape();
    }

    //  PARTICLES
    class Particle {
      constructor() {
        // this.pos = new p5.Vector(150, 150);
        this.pos = p5.Vector.random2D().mult(250);
        // this.posX = 0;
        // this.posY = 150;
        this.vel = p.createVector(0, 0);
        this.acc = this.pos.copy().mult(p.random(0.001, 0.0001));
        this.w = p.random(3, 5);
        // this.color = p.color(255, 204, 0);
        // this.color = [p.random(200, 255), p.random(200, 255), p.random(200, 255)];

        this.color = p.random([
          textColor,
          particleColor,
          strokeColor,

      }

      update(cond) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        if (cond) {
          this.pos.add(this.vel);
          this.pos.add(this.vel);
          this.pos.add(this.vel);
          this.pos.add(this.vel);
          this.pos.add(this.vel);
        }
      }

      show() {
        p.noStroke();
        p.fill(this.color);
        // p.ellipse(255, 350);
        p.ellipse(this.pos.x, this.pos.y, this.w);
      }

      edges() {
        if (this.pos.x < -p.windowWidth / 2
        || this.pos.x > p.windowWidth / 2
        || this.pos.y < -p.windowHeight / 2
        || this.pos.y > p.windowHeight / 2) {
          return true;
        }

        return false;
      }
    }

    const particle = new Particle();
    particles.push(particle);

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      if (!particles[i].edges()) {
        particles[i].update(amp > 210);
        particles[i].show();
      } else {
        particles.splice(i, 1);
      }
    }
  };

  return (
    <FullContainer>
      <Sketch
        setup={setup}
        draw={draw}
      />
    </FullContainer>
  );
}
