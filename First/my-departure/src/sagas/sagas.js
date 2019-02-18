import { call, put , takeLatest} from 'redux-saga/effects';
import { getUser, getFlight, getForecast} from '../api/api';

// worker saga
function* loadDashboard(){
    try{
        console.log('getUser')
        const user = yield call(getUser);
        // console.log('waiting')
        // take('GET_USER')
        // const user = select(state => state.user)
        console.log('getFlight')
        const flight = yield call(getFlight, user);
        console.log('getForecast')
        const forecast = yield call(getForecast, flight.date)
        yield put({type: 'FETCH_DATA_SUCCESS',user: user, flight: flight, forecast: forecast})
    } catch(err){
        yield put({type: 'FETCH_DATA_FAILURE', error: err})
    }
}

// function* loadUser(){
//     try {
//         console.log('getUser')
//         const user = yield call(getUser);
//         yield put({type:'GET_USER', user:user})
//     } catch (err) {
//         yield put({type: 'FETCH_DATA_FAILURE', error: err})
//     }
// }

// worker watcher
function* watcherLoadDashboard(){
    console.log('startGet')
    yield takeLatest('LOAD_DASHBOARD',loadDashboard)
        //fork(loadUser),
    
}

// register saga
export default function rootSaga(){
    return watcherLoadDashboard()
}