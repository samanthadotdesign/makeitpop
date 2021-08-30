import React, { useContext, useState } from 'react';
import { DjContext } from '../../store';
import {
  Swatch, Inner, ColorContainer, ColorPicker, Relative,
} from './styles';
import { InputLabel } from '../../styles';

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

  /**
   *
   * @param {*} color object {r: 255, g: 255, b: 255, a: 1}
   * @returns string rgba(255,255,255,1)
   */
  const createRgbStr = (color) => {
    const rgbVals = Object.values(color);
    const joinedRgbVals = rgbVals.join();
    console.log(joinedRgbVals);
    return joinedRgbVals;
  };

  return (
    <>
      <ColorContainer>
        <InputLabel>Colors</InputLabel>
        {selection.map((color, index) => (
          <Relative>
            <Swatch onClick={(e) => handleSwatch(e, index)}>
              <Inner
                color={color}
              />
            </Swatch>
            { isSwatchOpen[index] && (
            <ColorPicker
              color={color}
              onChange={(colorVal) => handleColorChange(colorVal, index)}
            />
            )}
          </Relative>
        ))}

      </ColorContainer>
    </>
  );
}
