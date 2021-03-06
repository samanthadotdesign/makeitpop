import React, { useReducer } from 'react';

export const DjContext = React.createContext(null);
const { Provider } = DjContext;

// Text Controls
const initialTextState = {
  input: '',
  size: 0,
  weight: 0,
};

const textReducer = (state, action) => {
  switch (action.type) {
    case 'set-text-input':
      state.input = action.payload.input;
      return { ...state };
    default:
      return state;
  }
};

// Audio Controls
export const audioConfig = [
  {
    name: 'Snare',
    key: 'Snare',
  },
  {
    name: 'Hi Hat',
    key: 'HiHat',
  },
  {
    name: 'Clap',
    key: 'Clap',
  },
  {
    name: 'Kick',
    key: 'Kick',
  },

];

const initialStepState = {
  phrases: {
    Snare: [0, 0, 0, 0, 0],
    HiHat: [0, 0, 0, 0, 0],
    Clap: [0, 0, 0, 0, 0],
    Kick: [0, 0, 0, 0, 0],
  },
  tempo: 120,
};

const audioReducer = (state, action) => {
  switch (action.type) {
    case 'add step':
      const addTrack = state.phrases[action.payload.trackName];
      // Replace 0 with 1
      addTrack.splice(action.payload.index, 1, 1);
      return { ...state };
    case 'remove step':
      const removeTrack = state.phrases[action.payload.trackName];
      // Replace 1 with 0
      removeTrack.splice(action.payload.index, 1, 0);
      return { ...state };
    case 'change tempo':
      state.tempo = action.payload;
      return { ...state };
    default:
      return state;
  }
};

// Color Controls
const initialColorState = {
  selection: [
    '#000', // [0] Background
    '#fff', // [1] Circle
    '#FFFF52', // [2] Particle
    '#FFFF52', // [3] Text
    // {
    //   r: 117, g: 214, b: 255, a: 1,
    // },
    // {
    //   r: 174, g: 187, b: 255, a: 1,
    // },
    // {
    //   r: 255, g: 171, b: 111, a: 1,
    // },
    // {
    //   r: 234, g: 158, b: 233, a: 1,
    // },
    // {
    //   r: 98, g: 232, b: 205, a: 1,
    // },
  ],
  isSwatchOpen: [
    false, false, false, false, false,
  ],
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'open swatch':
      const result = state.isSwatchOpen.map((color) => false);
      result[action.payload] = true;
      state.isSwatchOpen = result;
      return { ...state };
    case 'close swatch':
      state.isSwatchOpen[action.payload] = false;
      return { ...state };
    case 'update color':
      const { colorVal, index } = action.payload;
      state.selection[index] = colorVal;
      return { ...state };
    default:
      return state;
  }
};

const downloadReducer = (state, action) => {
  switch (action.type) {
    case 'set URL':
      state.url = action.payload;
      return { ...state };
    default:
      return state;
  }
};
const initialDownloadState = {
  url: '',
};

// Final Provider
export const DjProvider = ({ children }) => {
  const [textStoreState, textDispatch] = useReducer(textReducer, initialTextState);
  const [audioStoreState, audioDispatch] = useReducer(audioReducer, initialStepState);
  const [colorStoreState, colorDispatch] = useReducer(colorReducer, initialColorState);
  const [downloadStoreState, downloadDispatch] = useReducer(downloadReducer, initialDownloadState);

  return (
    <Provider value={{
      textStoreState,
      textDispatch,
      audioStoreState,
      audioDispatch,
      colorStoreState,
      colorDispatch,
      downloadStoreState,
      downloadDispatch,
    }}
    >
      {children}
    </Provider>
  );
};
