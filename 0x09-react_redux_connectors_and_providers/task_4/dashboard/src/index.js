import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import uiReducer, { initialUiState } from "./reducers/uiReducer";
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

// const store = createStore(uiReducer, Map(initialUiState), applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  uiReducer,
  Map(initialUiState),
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

