import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { app } = createActions({
  APP: {
    TOGGLE_APP: payload => payload
  }
})
