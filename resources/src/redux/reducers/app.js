import { handleActions } from 'redux-actions';
import { app } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[app.toggleApp]: (store, {payload}) => ({
        isOpenApp: !store.isOpenApp
	})
}, initialState.app)
