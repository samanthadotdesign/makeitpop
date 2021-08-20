import React, { useContext, useReducer } from 'react';
import Slider from '@material-ui/core/Slider';
import { DjContext } from '../../store';

export default function TypeControl() {
  const { textStoreState, textDispatch } = useContext(DjContext);

  const handleTextChange = (e) => {
    const input = e.target.value;
    textDispatch({ type: 'set-text-input', payload: { input } });
  };

  return (
    <>
      <input type="text" onChange={handleTextChange} />
      {/* <Slider
      defaultValue={30}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={110}
      disabled
    /> */}
    </>
  );
}
