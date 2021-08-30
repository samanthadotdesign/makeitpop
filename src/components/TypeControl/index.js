import React, { useContext } from 'react';
import { DjContext } from '../../store';
import { Input, InputLabel } from '../../styles';

export default function TypeControl() {
  const { textDispatch } = useContext(DjContext);

  const handleTextChange = (e) => {
    const input = e.target.value;
    textDispatch({ type: 'set-text-input', payload: { input } });
  };

  return (
    <>
      <InputLabel>Text</InputLabel>
      <Input
        type="text"
        onChange={handleTextChange}
        placeholder="make it trippy"
      />
    </>
  );
}
