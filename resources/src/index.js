import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from "react-redux";
import { Router } from "react-router";
import configStore from "./redux/store/index";
import createMemoryHistory from "history/createMemoryHistory";
// import { syncStore } from './helper/storageSync'

// syncStore(configStore)
// console.log(configStore)

// const old_root = document.getElementById(APP_NAME);
const history = createMemoryHistory({
  initialEntries: [ '/' ],  // The initial URLs in the history stack
  initialIndex: 0,          // The starting index in the history stack
  keyLength: 6,             // The length of location.key
  // A function to use to confirm navigation with the user. Required
  // if you return string prompts from transition hooks (see below)
  // getUserConfirmation:(message, callback) => callback(window.confirm(message))
  getUserConfirmation:null
})
const root = document.querySelector('#root')
  ReactDOM.render(
    <Provider store={configStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    root
  );
