import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';

import rootSaga from '../sagas/saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(){
    console.log('1')
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}