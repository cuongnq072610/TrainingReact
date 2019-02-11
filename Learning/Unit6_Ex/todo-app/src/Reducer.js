const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, todos: [...state.todos, action.todo]}
        default: 
            return state
    }
}

export default reducer