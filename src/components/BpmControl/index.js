import React, { useContext, useEffect } from 'react';
import { DjContext } from '../../store';
import { TempoSlider, Container } from './styles';
import { InputLabel } from '../../styles';

export default function BpmControl() {
  const { audioStoreState, audioDispatch } = useContext(DjContext);
  const { tempo } = audioStoreState;

  const handleChange = (e, sliderVal) => {
    audioDispatch({
      type: 'change tempo',
      payload: sliderVal,
    });
  };

  return (
    <Container>
      <InputLabel>Tempo</InputLabel>
      <TempoSlider
        value={tempo}
        onChange={handleChange}
        defaultValue={120}
        aria-labelledby="continuous-slider"
        min={30}
        max={240}
        valueLabelDisplay="auto"
      />
    </Container>
  );
}
