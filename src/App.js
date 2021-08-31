import React, { useState } from 'react';
import { DjProvider } from './store';
import GraphicControl from './components/GraphicControl';
import Nav from './components/Nav';
import AudioVisualization from './components/AudioVisualization';
import ControlsContainer from './components/ControlsContainer';
import { GlobalStyle } from './styles';

// Add p5 script at the bottom of the document
const p5Script = document.createElement('script');
p5Script.setAttribute(
  'defer', true,
);
p5Script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js" integrity="sha512-WzkwpdWEMAY/W8WvP9KS2/VI6zkgejR4/KTxTl4qHx0utqeyVE0JY+S1DlMuxDChC7x0oXtk/ESji6a0lP/Tdg==" crossorigin="anonymous" referrerpolicy="no-referrer"';
document.body.appendChild(p5Script);

function App() {
  const [controlsOpen, setControlsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <DjProvider>
        <Nav
          controlsOpen={controlsOpen}
          setControlsOpen={setControlsOpen}
        />
        <AudioVisualization />

        {controlsOpen && (
        <ControlsContainer
          setControlsOpen={setControlsOpen}
        />
        ) }

      </DjProvider>
    </>
  );
}

export default App;

/**
 * App level: Provider
 * [1] <Graphic Control>
 *        <Type slider>
 *            -> p5.setup()
 *        <Color>
 *        <Shape Button> -> Whirlwind
 *        <Shape Button> -> Ribbons
 *        <Shape Button> -> Flag
 *         ...
 * [2] <Audio Control>
 *
 * [3] <Display> -> all the data from graphic control
 *           -> p5.draw()
 * [4] <Record>
 */

/**
 * <Graphic Control>
 *        <Display>
 */
