let id = 0;

export function AddTodo(text){
    return {
        type: "ADD",
        todo: {
            text,
            id: id++
        }
    }
}