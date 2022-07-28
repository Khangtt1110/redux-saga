import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

// Model
export interface AuthState {
    isLoggedIn: boolean;
    loading?: boolean;
    currentUser?: User;
}

export interface LoginUser {
    username: string;
    password: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    loading: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state: AuthState, action: PayloadAction<LoginUser>) {
            state.loading = true;
        },

        loginSuccess(state: AuthState, action: PayloadAction<User>) {
            state.currentUser = action.payload;
            state.loading = false;
            state.isLoggedIn = true;
        },

        loginFail(state: AuthState, action: PayloadAction<string>) {
            state.loading = false;
        },

        logout(state: AuthState) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// Actions
export const authActions = authSlice.actions;
// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectCurrentUSer = (state: any) => state.auth.currentUser;
// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
