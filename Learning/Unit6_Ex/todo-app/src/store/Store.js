import { createStore } from 'redux';
import reducer from '../reducer/Reducer';

const state = {
    todos: [],
    done: []
}
const store = createStore(reducer,state)
export default store