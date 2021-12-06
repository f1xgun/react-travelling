import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';

import App from './App';
import { createContext } from 'react';
import UserStore from './components/UserStore';
export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);
