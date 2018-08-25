import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { messages } = createActions({
  MESSAGES: {
    SHOW_MESSAGES: payload => payload
  }
})
