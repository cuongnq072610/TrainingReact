import getPay from '../api/api';
import { put, takeLatest } from 'redux-saga/effects'

// Worker thuc thi cac nhiem vu
function* payingItem() {
    try {
        yield getPay(4000)
        yield put({ type: 'PAY_SUCCESS'})
    } catch (error) {
        yield put({ type: 'PAY_FAILURE' })
    }
}

// Watcher tiep nhan cac dispatch action tu view
function* watchPaying(){
    yield takeLatest('PAYING', payingItem)
}

function* rootSaga() {
    yield watchPaying()
}

export default rootSaga