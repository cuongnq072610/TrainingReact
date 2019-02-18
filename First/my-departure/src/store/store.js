import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/reducer'
import rootSaga from '../sagas/sagas'
import createMiddlewareSaga from 'redux-saga'

const sagaMiddleware = createMiddlewareSaga();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store