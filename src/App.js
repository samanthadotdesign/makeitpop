import React from 'react';
import GraphicControl from './components/GraphicControl';
import Display from './components/Display';
import { DjProvider } from './store';

console.log('outside render');
function App() {
  console.log('inside render');
  return (
    <DjProvider>
      <GraphicControl />
      <Display />
    </DjProvider>
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
