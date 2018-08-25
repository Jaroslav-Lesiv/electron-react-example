import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';
// import store from '../redux/store'

import * as action from '../redux/actions';
import * as messages from './messages'

function* messagesWorker() {
	yield takeLatest(action.app.toggleApp, messages.showMessage)
}

export default function* rootSaga() {
	yield all([
		messagesWorker()
	])
  }
