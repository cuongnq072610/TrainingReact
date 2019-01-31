import { createStore } from 'redux';
import reducer from '../reducer/Reducer';

const defaultState = {
    left_item: [
        { id: 1, name: 'mouse1', price: 1000, quantity: 0 },
        { id: 2, name: 'mouse2', price: 2000, quantity: 0 },
        { id: 3, name: 'mouse3', price: 3000, quantity: 0 },
        { id: 4, name: 'mouse4', price: 4000, quantity: 0 },
        { id: 5, name: 'mouse5', price: 5000, quantity: 0 },
    ],
    list_item: []
}

const Store = createStore(reducer, defaultState);

export default Store;