import React, { useReducer } from 'react';

export const DjContext = React.createContext(null);
const { Provider } = DjContext;

const initialState = {};
const ACTIONS = {
  GET_DISPLAY: 'get-display',
};

const djReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DISPLAY:
      return console.log('success');
    default:
      return state;
  }
};

export const DjProvider = ({ children }) => {
  const [store, dispatch] = useReducer(djReducer, initialState);
  return (
    <Provider value={{ store, dispatch }}>
      {children}
    </Provider>
  );
};
