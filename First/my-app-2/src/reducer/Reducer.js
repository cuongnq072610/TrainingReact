const reducer = (state , action) => {
    switch (action.type) {
        case 'ADD': {
            //Get duplicate item
            var items = state.list_item.filter(item =>{
                return item.name === action.item.name
            })
            //Set new item to List
            var item;
            if(items.length > 0){
                //If duplicate add 1 to quantity
                item = {...items[0], quantity: items[0].quantity + 1}
            } else {
                //Create new item
                item = {...action.item, quantity: 1}
            }
            //If have duplicate remove old item with new item
            var newList = state.list_item.filter(item => {
                return item.id !== action.item.id
            })
            var addList = [...newList, item]
            return {...state, list_item: addList}
        }
        case 'DELETE': {
            var updateList = state.list_item.filter(item => {
                return item.id !== action.item.id
            })
            return {...state, list_item: updateList}
        }
        default: 
            return state;
    }
}

export default reducer;