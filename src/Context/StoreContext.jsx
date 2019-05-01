import React, { useReducer, useEffect } from 'react';
import { initialState } from './Reducers';
import { useActions } from './Actions';
import { reducer } from './Reducers';

const StoreContext = React.createContext(initialState);
const StoreProvider = ({ children }) => {
  //Get State and Dispatch from react hook(useReducer)
  const [state, dispatch] = useReducer(reducer, initialState);
  //Get Actions from Custom hook ACtion and pass it to Context
  const actions = useActions(state, dispatch);

  //Log State
  // useEffect(() => console.log(state), [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
