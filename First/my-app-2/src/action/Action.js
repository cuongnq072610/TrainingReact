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

export const login = () => {
    return {
        type: 'LOGIN'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}