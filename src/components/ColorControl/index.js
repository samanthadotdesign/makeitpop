import React, { useContext, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { DjContext } from '../../store';
import { Swatch, Inner } from './styles';

export default function ColorControl() {
  const { colorStoreState, colorDispatch } = useContext(DjContext);
  const { selection, isSwatchOpen } = colorStoreState;

  const handleColorChange = (colorVal, index) => {
    console.log(colorVal);
    colorDispatch({
      type: 'update color',
      payload: {
        colorVal,
        index,
      },
    });
  };

  const handleSwatch = (e, index) => {
    // if isSwatchOpen is false, open the swatch
    if (!isSwatchOpen[index]) {
      colorDispatch({ type: 'open swatch', payload: index });
    } else {
      colorDispatch({ type: 'close swatch', payload: index });
    }
  };

  return (
    <>
      {selection.map((color, index) => (
        <>
          <Swatch onClick={(e) => handleSwatch(e, index)}>
            <Inner
              r={color.r}
              g={color.g}
              b={color.b}
              a={color.a}
            />
          </Swatch>
          { isSwatchOpen[index] && (
          <HexColorPicker
            color={color}
            onChange={(colorVal) => handleColorChange(colorVal, index)}
          />
          )}
        </>
      ))}

    </>
  );
}
