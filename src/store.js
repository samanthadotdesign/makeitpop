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
      return state;
    default:
      return state;
  }
};

// Final Provider
export const DjProvider = ({ children }) => {
  const [textStoreState, textDispatch] = useReducer(textReducer, initialTextState);
  const [audioStoreState, audioDispatch] = useReducer(audioReducer, initialStepState);

  return (
    <Provider value={{
      textStoreState,
      textDispatch,
      audioStoreState,
      audioDispatch,
    }}
    >
      {children}
    </Provider>
  );
};
