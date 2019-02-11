const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, todos: [...state.todos, action.todo]}
        case 'CHECK':
            var newTodo = state.todos.filter(item =>{
                return item.id !== action.id
            })
            var doneTodo = state.todos.filter(item => {
                return item.id === action.id
            })
            return {...state, todos: newTodo, done: [...state.done, doneTodo[0]]}
        default: 
            return state
    }
}

export default reducer