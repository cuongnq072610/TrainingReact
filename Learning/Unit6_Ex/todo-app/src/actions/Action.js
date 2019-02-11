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

export const CheckDone = (id) =>{
    return {
        type: "CHECK",
        id
    }
}