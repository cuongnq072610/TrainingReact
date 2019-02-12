import uut from '../Reducer';

const initialState = {
    todos: [],
    done: []
};

it('should have initial state', () => {
    expect(uut()).toEqual(initialState);
});
