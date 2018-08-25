import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers'
import initialState from './initialState'
import rootSaga from '../../sagas'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	initialState,
	applyMiddleware( sagaMiddleware, logger )
)


if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers')
		store.replaceReducer(nextRootReducer)
	})
}

sagaMiddleware.run(rootSaga)

export default store
