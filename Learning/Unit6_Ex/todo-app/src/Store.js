import { createStore } from 'redux';
import reducer from './Reducer';

const state = {
    todos: []
}
const store = createStore(reducer,state)
export default store