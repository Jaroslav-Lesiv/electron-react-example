import { delay } from 'redux-saga';
import {
	put,
	all,
    select,
} from 'redux-saga/effects';

import * as action from '../../redux/actions';

function* showMessage({payload}) {
    // const { app } = yield select()
    yield put(action.messages.showMessage({ show: true, message: 'App toggled' }))
    delay(5000)
    yield put(action.messages.showMessage({ show: false, message: '' }))
}

export {
    showMessage
}
