import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constrants'
import getItem from '../api/api'

// loading
export function getData() { 
    return {
        type: FETCHING_DATA
    }
}
// get success
export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}
// get error
export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}
// get data
export function fetchData() {
    return (dispatch) => {
        dispatch(getData()) // chay loading
        getItem() // lay du lieu
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log("err: ", err))
    }
}