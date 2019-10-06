import React, { useReducer } from 'react';

import initialState from '../store/initialState';
import reducer from '../hooks/reducer';
import useAPI from '../api';
import { TicketsPage } from '../pages';
import { Header } from '../components';
import StateContext from '../utils/context';
import './style.css';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useAPI(dispatch, state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className={App.displayName}>
        <Header />
        <TicketsPage />
      </div>
    </StateContext.Provider>
  );
};

App.displayName = 'App';

export default App;
