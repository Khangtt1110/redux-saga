import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, fork, put, take } from 'redux-saga/effects';
import { history, TOKEN } from 'utils';
import { ADMIN_PATH, LOGIN_PATH } from '../../utils/path';
import { authActions, LoginUser } from './authSlice';

function forwardTo(location: string) {
    history.push(location);
}

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

        yield call(forwardTo, ADMIN_PATH);
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
