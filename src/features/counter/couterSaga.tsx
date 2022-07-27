import { takeEvery, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSuccessSaga } from './counterSlice';

// handle saga
function* handleIncrement(action: PayloadAction<number>) {
    console.log('waiting');

    yield delay(1000);

    yield put(incrementSuccessSaga(action.payload));
}

// eslint-disable-next-line require-yield
export default function* counterSaga() {
    console.log('Log saga');
    yield takeEvery(incrementSaga.toString(), handleIncrement);
}
