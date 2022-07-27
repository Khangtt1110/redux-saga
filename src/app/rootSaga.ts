import { all } from 'redux-saga/effects';
import counterSaga from '../features/counter/couterSaga';

export default function* rootSaga() {
    yield all([counterSaga()]);
}
