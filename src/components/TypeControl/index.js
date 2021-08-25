import React, { useContext, useReducer } from 'react';
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
    </>
  );
}
