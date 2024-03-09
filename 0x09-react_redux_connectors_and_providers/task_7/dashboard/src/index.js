import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import uiReducer, { initialUiState } from "./reducers/uiReducer";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer, { initialState } from './reducers/rootReducer';

// const store = createStore(uiReducer, Map(initialUiState), applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(rootReducer),
  initialState,
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

