import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import uiReducer, { initialState } from "./reducers/uiReducer";
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import thunk from 'redux';

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

