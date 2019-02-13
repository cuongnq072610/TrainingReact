import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../action/constrants'

const initialState = {
    data : [],
    dataFetched: false,
    isFetching: false,
    error: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA: {
            console.log(FETCHING_DATA)
            return { ...state, data: [], isFetching: true }
        }
        case FETCHING_DATA_SUCCESS: {
            console.log(FETCHING_DATA_SUCCESS)
            return { ...state, data: action.data, isFetching: false }
        }
        case FETCHING_DATA_FAILURE: {
            console.log(FETCHING_DATA_FAILURE)
            return { ...state, isFetching: false, error: true }
        }
        default:
            return state
    }
}

export default dataReducer