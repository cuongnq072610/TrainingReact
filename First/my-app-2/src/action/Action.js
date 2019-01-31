export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE',
        item
    }
}