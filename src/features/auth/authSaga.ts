import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { TOKEN } from 'utils';
import { ADMIN_PATH, LOGIN_PATH } from '../../utils/path';
import { authActions, LoginUser } from './authSlice';
import { LOCATION_CHANGE } from 'redux-first-history';
import { takeEvery } from 'redux-saga/effects';

function* handleLogin(payload: LoginUser) {
    try {
        // Call API
        yield localStorage.setItem(TOKEN, JSON.stringify(payload));
        yield put(
            authActions.loginSuccess({
                id: Math.floor(Math.random() * 10),
                username: payload.username,
                password: payload.password,
            })
        );

        yield put(push(ADMIN_PATH));
    } catch (error) {
        // yield put(authActions.loginFail(error));
    }
}

function* handleLogout() {
    yield console.log('Logout');
    localStorage.removeItem(TOKEN);
    yield put(push(LOGIN_PATH));
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem(TOKEN));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginUser> = yield take(authActions.login.type);
            console.log('waitttt');

            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        // call to wait
        yield call(handleLogout);
    }
}

export function* authSaga() {
    yield fork(watchLoginFlow);
}
