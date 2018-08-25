import { handleActions } from 'redux-actions';
import { messages } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[messages.showMessages]: (store, {payload}) => ({
        ...store, ...payload
	})
}, initialState.app)
