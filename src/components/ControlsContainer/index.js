import React from 'react';
import TypeControl from '../TypeControl';
import ColorControl from '../ColorControl';
import AudioControl from '../AudioControl';
import Play from '../Play';
import {
  Container, Panel, Close, CloseWrapper, BG,
} from './styles';

export default function ControlsContainer({ setControlsOpen }) {
  const handleCloseClick = () => {
    setControlsOpen(false);
  };

  return (
    <>
      <BG onClick={handleCloseClick} />
      <Panel>
        {/* Graphic Controls */}
        <CloseWrapper
          onClick={handleCloseClick}
        >
          <Close />
        </CloseWrapper>
        <Play />
        <Container>
          <TypeControl />
          <ColorControl />
        </Container>
        {/* Audio Controls */}
        <AudioControl />
      </Panel>
    </>
  );
}
