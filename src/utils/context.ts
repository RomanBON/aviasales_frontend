import React, { createContext } from 'react';

import initialState from '../store/initialState';

const StateContext = createContext({
  state: initialState,
  dispatch: (() => ({})) as React.Dispatch<IAction>
});

export default StateContext;
