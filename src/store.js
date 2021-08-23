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
    name: 'Open Hat',
    key: 'OpenHat',
    sound: '',
  },
  {
    name: 'Closed Hat',
    key: 'ClosedHat',
    sound: '',
  },
  {
    name: 'Clap',
    key: 'Clap',
    sound: '',
  },
  {
    name: 'Kick',
    key: 'Kick',
    sound: './audio/bass.wav',
  },

];

const initialStepState = {
  OpenHat: [0, 0, 0, 0, 0],
  ClosedHat: [0, 0, 0, 0, 0],
  Clap: [0, 0, 0, 0, 0],
  Kick: [0, 0, 0, 0, 0],
};

const audioReducer = (state, action) => {
  switch (action.type) {
    case 'add step':
      return state;
    case 'remove step':
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
