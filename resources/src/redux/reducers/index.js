import { combineReducers } from 'redux'
import app from './app'
import messages from './messages'
import user from './messages'

export default combineReducers({
    app,
    messages,
    user
})
