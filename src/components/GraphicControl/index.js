import React, {
  useEffect, useContext, useState, useRef,
} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { DjContext } from '../../store';
import TypeControl from '../TypeControl';

export default function GraphicControl() {
  const { textDispatch, textStoreState } = useContext(DjContext);
  const { input } = textStoreState;
  const [textInput, setTextInput] = useState('');

  // Rerendering the sketch every time the input changes
  const sketch = (p5, textInput) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };

    p5.draw = () => {
      p5.clear();
      p5.text(textInput, 100, p5.windowHeight / 2);
    };
  };

  // useEffect to cause the component to rerender every time the input changes
  useEffect(() => {
    setTextInput(input);
  }, [textStoreState]);

  return (
    <>
      <P5Wrapper sketch={(p5) => { sketch(p5, textInput); }}>
        <TypeControl />
      </P5Wrapper>
    </>
  );
}
