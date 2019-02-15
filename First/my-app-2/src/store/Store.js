import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/Reducer';

import createMiddlewareSaga from 'redux-saga'
import rootSaga from '../sagas/sagas'

const defaultState = {
    left_item: [
        { id: 1, name: 'mouse1', price: 1000, quantity: 0 },
        { id: 2, name: 'mouse2', price: 2000, quantity: 0 },
        { id: 3, name: 'mouse3', price: 3000, quantity: 0 },
        { id: 4, name: 'mouse4', price: 4000, quantity: 0 },
        { id: 5, name: 'mouse5', price: 5000, quantity: 0 },
    ],
    list_item: [],
    total: 0,
    user:'',
    isLogin: false,
    isPaying: false,
    isErr: false
}

const sagaMiddleware = createMiddlewareSaga()

const Store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default Store;