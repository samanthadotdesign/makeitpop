import React, { useContext, useState } from 'react';
import { Slider } from '@material-ui/core';
import { DjContext } from '../../store';

export default function BpmControl() {
  const { audioStoreState, audioDispatch } = useContext(DjContext);
  const { tempo } = audioStoreState;
  const [currentTempo, setCurrentTempo] = useState(tempo);

  const handleChange = (e, sliderVal) => {
    setCurrentTempo(sliderVal);
    console.log(currentTempo);
    audioDispatch({ type: 'change tempo', payload: currentTempo });
  };

  return (
    <div>
      <p>Tempo</p>
      <Slider
        value={currentTempo}
        onChange={handleChange}
        defaultValue={120}
        aria-labelledby="continuous-slider"
        min={30}
        max={240}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
