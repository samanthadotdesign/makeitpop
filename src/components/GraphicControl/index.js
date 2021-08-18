import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

const sketch = (p5) => {
  // Type
  let TEXT_INPUT;
  let textDisplay;
  let SIZE_SLIDER;

  // Colors
  let BACKGROUND_COLOR_PICKER;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // Type
    TEXT_INPUT = p5.createInput('hello world');
    TEXT_INPUT.position(10, 40);
    SIZE_SLIDER = p5.createSlider(0, 500, 100)
    SIZE_SLIDER.position(10,10);

    // Background Color
    BACKGROUND_COLOR_PICKER = p5.createColorPicker('#fff');
    BACKGROUND_COLOR_PICKER.position(10,80);
    BACKGROUND_COLOR_PICKER.style('height', '50px')
    BACKGROUND_COLOR_PICKER.style('width', '100px')

  };

  p5.draw = () => {
    p5.clear();

    // Background Color
    p5.background(BACKGROUND_COLOR_PICKER.value())

    // Text
    const input = TEXT_INPUT.value();
    const textSizeInput = SIZE_SLIDER.value();
    textDisplay = p5.text(input, 100, p5.windowHeight/2);
    p5.textSize(textSizeInput);

  };
};

export default function GraphicControl() {
  return (
    <>
      <P5Wrapper sketch={(p5) => { sketch(p5); }} />
    </>
  );
}
