
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            //Get duplicate item
            var items = state.list_item.filter(item => {
                return item.name === action.item.name
            })
            //Set new item to List
            var item;
            if (items.length > 0) {
                //If duplicate add 1 to quantity
                item = { ...items[0], quantity: items[0].quantity + 1 }
            } else {
                //Create new item
                item = { ...action.item, quantity: 1 }
            }
            //If have duplicate remove old item with new item
            var newList = state.list_item.filter(item => {
                return item.id !== action.item.id
            })
            var addList = [...newList, item]
            let total = addList.reduce((sum, item) => {
                return sum = sum + item.price * item.quantity
            }, 0)
            return { ...state, list_item: addList, total: total }
        }
        case 'DELETE': {
            var updateList = state.list_item.filter(item => {
                return item.id !== action.item.id
            })
            let total = updateList.reduce((sum, item) => {
                return sum = sum + item.price * item.quantity
            }, 0)
            return { ...state, list_item: updateList, total: total }
        }
        case 'LOGIN': {
            return { ...state, isLogin: true, user: action.user }
        }
        case 'LOGOUT': {
            return { ...state, isLogin: false, user: '' }
        }
        case 'PAYING':
            return { ...state, isPaying: true }
        case 'PAY_SUCCESS':
            alert('Paying done')
            return { ...state, isPaying: false, total: 0, list_item: [] }
        case 'PAY_FAILURE':
            return { ...state, isPaying: false, isErr: true }
        default:
            return state;
    }
}

export default reducer;