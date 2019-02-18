import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../action/constrant'

const initState = {
    user:'',
    flight: '',
    forecast: ''
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_DATA_SUCCESS:{
            return {...state, flight: action.flight, forecast: action.forecast}
        }
        case FETCH_DATA_FAILURE:{
            return {...state, error: action.error}
        }
        case 'GET_USER':{
            return {...state, user: action.user}
        }
        default: 
            return state 
    }
}

export default reducer