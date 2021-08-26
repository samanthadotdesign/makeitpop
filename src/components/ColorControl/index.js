import React, { useContext, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { DjContext } from '../../store';
import { Swatch, Inner } from './styles';

const background = '#000';

export default function ColorControl() {
  const { colorStoreState, colorDispatch } = useContext(DjContext);
  // selection is an array of color strings
  const { selection } = colorStoreState;
  const [swatchOpen, setSwatchOpen] = useState(false);

  // use setState for array for isSwatchOpen state, map each one to true / false
  // swatchOpenIndex -> index of the swatch that is open

  const handleColorChange = (colorVal) => {
    console.log('***** INSIDE HANDLE COLOR *****');
    console.log(colorVal);
  };

  const handleSwatch = () => {
    setSwatchOpen(!swatchOpen);
  };

  return (
    <>
      {selection.map((color, index) => (
        <>
          <Swatch onClick={handleSwatch}>
            <Inner color={color} />
          </Swatch>

          { swatchOpen && (
          <HexColorPicker
            color={color}
            onChange={handleColorChange}
          />
          )}
        </>
      ))}
    </>
  );
}
