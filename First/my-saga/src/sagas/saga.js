import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../action/constrants';
import { put, takeLatest } from 'redux-saga/effects';
import getItem from '../api/api'

function* fetchData() {
    try{
        console.log('5')
        const data = yield getItem()
        console.log('6')
        yield put({ type: FETCHING_DATA_SUCCESS, data})
    } catch(e){
        yield put({ type: FETCHING_DATA_FAILURE})
    }
}

function* watcherFetch(){
    yield takeLatest(FETCHING_DATA, fetchData)
}

function* rootSaga(){
    console.log('2')
    yield watcherFetch()
}

export default rootSaga