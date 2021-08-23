import React from 'react';
import { DjProvider } from './store';
import GraphicControl from './components/GraphicControl';
import Display from './components/Display';
import AudioControl from './components/AudioControl';
import Record from './components/Record';
import Nav from './components/Nav';
import { Main } from './styles';

function App() {
  return (
    <>
      <DjProvider>
        <Nav />
        <Main>
          <GraphicControl />
          <Display />
          <AudioControl />
          <Record />
        </Main>
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
